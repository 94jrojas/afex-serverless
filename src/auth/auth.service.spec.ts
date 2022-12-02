import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ApiKeysRepository } from './repositories/apikeys.repository';
import { ApiKeyStrategy } from './strategies/apikey.strategy';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, ApiKeyStrategy, ApiKeysRepository],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });

  it('Validate api key', async () => {
    const resultExpected = true;
    expect(
      await service.validateApiKey('45sdf8wWDSfsdfbvgsfdgwlljgsfwfq'),
    ).toEqual(resultExpected);
  });
});
