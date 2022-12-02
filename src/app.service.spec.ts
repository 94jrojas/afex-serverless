import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();
    service = module.get<AppService>(AppService);
  });
  it('Verify that the API is working', async () => {
    const resultExpected = { message: 'Service is working.' };
    expect(await service.getStatus()).toEqual(resultExpected);
  });
});
