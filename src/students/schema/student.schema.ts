import { Schema } from 'dynamoose';
import { v4 as uuid } from 'uuid';

export const StudentSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
    default: uuid,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  grade: {
    type: String,
  },
  section: {
    type: String,
  },
});
