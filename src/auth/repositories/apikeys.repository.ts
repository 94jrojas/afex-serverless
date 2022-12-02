import { Injectable } from '@nestjs/common';
import { ApiKeyEntity } from '../entities/apikey.entity';

@Injectable()
export class ApiKeysRepository {
  private keys: ApiKeyEntity[] = [
    {
      name: 'Client Key',
      key: 'WTuST68ZHuHWyk8P6tQnntoZJDYv8cdO',
    },
    {
      name: 'Frontend Key',
      key: 'Wlksdjfl56w5f56w546w45f6w8f4w6f',
    },
    {
      name: 'Test key',
      key: '45sdf8wWDSfsdfbvgsfdgwlljgsfwfq',
    },
  ];

  // This funtion returns the API key entity if it exists
  public findOne(key: string): ApiKeyEntity {
    return this.keys.find((item) => item.key === key);
  }
}
