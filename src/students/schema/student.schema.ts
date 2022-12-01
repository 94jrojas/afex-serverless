import * as dynamoose from 'dynamoose';
import { v4 as uuid } from 'uuid';
import { Item } from 'dynamoose/dist/Item';

export interface Student extends Item {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  grade: number;
  level: string;
  section: string;
}

export const StudentSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
    default: uuid,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
  },
  level: {
    type: String,
  },
  section: {
    type: String,
  },
});

// Export student model interface
export const StudentModel = dynamoose.model<Student>('Student', StudentSchema, {
  create: true, // Create table in DB, if it does not exist,
  update: true, // Update remote indexes if they do not match local index structure
  waitForActive: {
    enabled: true, // Wait for table to be created before trying to use it
    check: {
      // Wait up to 20 seconds for table to be created
      timeout: 20000,
    },
  },
});
