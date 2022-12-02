import { Injectable } from '@nestjs/common';
import { ApiKeysRepository } from './repositories/apikeys.repository';

@Injectable()
export class AuthService {
  constructor(private readonly apiKeysRespository: ApiKeysRepository) {}

  // This function validates the API key in repository
  validateApiKey(apiKey: string): boolean {
    const apiKeyEntity = this.apiKeysRespository.findOne(apiKey);
    return !!apiKeyEntity;
  }
}
