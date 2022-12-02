import { Injectable } from '@nestjs/common';
import { ApiKeysRepository } from './repositories/apikeys.repository';

@Injectable()
export class AuthService {
  constructor(private readonly apiKeysRespository: ApiKeysRepository) {}

  validateApiKey(apiKey: string): boolean {
    const apiKeyEntity = this.apiKeysRespository.findOne(apiKey);
    return !!apiKeyEntity;
  }
}
