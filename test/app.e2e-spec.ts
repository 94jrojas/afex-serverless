import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const apiKey = '45sdf8wWDSfsdfbvgsfdgwlljgsfwfq';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    const resultExpected = { message: 'Service is working.' };
    return request(app.getHttpServer())
      .get('/')
      .set('x-api-key', apiKey)
      .expect(200)
      .expect(resultExpected);
  });

  afterAll(async () => {
    await app.close();
  });
});
