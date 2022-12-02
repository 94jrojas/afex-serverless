import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('findAll', () => {
    it('Verify that the API is working', async () => {
      const resultExpected = { message: 'Service is working.' };

      expect(await appController.getStatus()).toEqual(resultExpected);
    });
  });
});
