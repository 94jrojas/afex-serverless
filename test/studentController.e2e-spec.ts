import { TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { testModule, usePipes } from './test.module';

const apiKey = '45sdf8wWDSfsdfbvgsfdgwlljgsfwfq';
const url = '/students';

describe('StudentsController (e2e)', () => {
  let app: INestApplication;
  let newStudentId: string;
  let studentsLength: number;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await testModule.compile();

    app = moduleFixture.createNestApplication();
    usePipes(app);
    await app.init();
  });

  it('/students (GET)', () => {
    return request(app.getHttpServer())
      .get(url)
      .set('x-api-key', apiKey)
      .expect(200)
      .expect((res) => {
        if (!Array.isArray(res.body)) {
          throw new Error('Body is not an array');
        }
        studentsLength = res.body.length;
        if (res.body.length !== 0) {
          const [student] = res.body;
          expect(student).toHaveProperty('id');
          expect(student).toHaveProperty('firstName');
          expect(student).toHaveProperty('lastName');
          expect(student).toHaveProperty('age');
          expect(student).toHaveProperty('grade');
          expect(student).toHaveProperty('level');
          expect(student).toHaveProperty('section');
        } else {
          expect(res.body).toEqual([]);
        }
      });
  });

  it('/students (POST)', () => {
    const mockData = {
      firstName: 'John',
      lastName: 'Doe',
      age: 18,
      grade: "Bachelor's",
      level: 'A',
      section: 'A',
    };
    return request(app.getHttpServer())
      .post(url)
      .set('x-api-key', apiKey)
      .send(mockData)
      .expect(201)
      .expect((res) => {
        newStudentId = res.body.id;
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('firstName', mockData.firstName);
        expect(res.body).toHaveProperty('lastName', mockData.lastName);
        expect(res.body).toHaveProperty('age', mockData.age);
        expect(res.body).toHaveProperty('grade', mockData.grade);
        expect(res.body).toHaveProperty('level', mockData.level);
        expect(res.body).toHaveProperty('section', mockData.section);
      });
  });

  it('/students (POST) - 400', () => {
    return request(app.getHttpServer())
      .post(url)
      .set('x-api-key', apiKey)
      .send({})
      .expect(400)
      .expect((res) => {
        expect(res.body).toHaveProperty('statusCode', 400);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('error', 'Bad Request');
      });
  });

  it('/students (PATCH)', () => {
    const mockData = {
      firstName: 'John',
      lastName: 'Doe',
      age: 19,
      grade: "University's",
    };
    return request(app.getHttpServer())
      .patch(`${url}/${newStudentId}`)
      .set('x-api-key', apiKey)
      .send(mockData)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', newStudentId);
        expect(res.body).toHaveProperty('firstName', mockData.firstName);
        expect(res.body).toHaveProperty('lastName', mockData.lastName);
        expect(res.body).toHaveProperty('age', mockData.age);
        expect(res.body).toHaveProperty('grade', mockData.grade);
        expect(res.body).toHaveProperty('level', 'A');
        expect(res.body).toHaveProperty('section', 'A');
      });
  });

  it('/students (PATCH) - 404', () => {
    return request(app.getHttpServer())
      .patch(`${url}/123`)
      .set('x-api-key', apiKey)
      .send({})
      .expect(404)
      .expect((res) => {
        expect(res.body).toHaveProperty('statusCode', 404);
        expect(res.body).toHaveProperty('message', 'Student not found');
      });
  });

  it('/students (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`${url}/${newStudentId}`)
      .set('x-api-key', apiKey)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', newStudentId);
        expect(res.body).toHaveProperty('firstName', 'John');
        expect(res.body).toHaveProperty('lastName', 'Doe');
        expect(res.body).toHaveProperty('age', 19);
        expect(res.body).toHaveProperty('grade', "University's");
        expect(res.body).toHaveProperty('level', 'A');
        expect(res.body).toHaveProperty('section', 'A');
      });
  });

  it('/students (DELETE) - 404', () => {
    return request(app.getHttpServer())
      .delete(`${url}/123`)
      .set('x-api-key', apiKey)
      .expect(404)
      .expect((res) => {
        expect(res.body).toHaveProperty('statusCode', 404);
        expect(res.body).toHaveProperty('message', 'Student not found');
      });
  });

  it('/students (GET) - 200', () => {
    return request(app.getHttpServer())
      .get(url)
      .set('x-api-key', apiKey)
      .expect(200)
      .expect((res) => {
        if (!Array.isArray(res.body)) {
          throw new Error('Body is not an array');
        }
        expect(res.body.length).toEqual(studentsLength);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
