import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return { message: 'Service is working.' };
  }
}
