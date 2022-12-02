import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // This function returns status of the API
  getStatus(): object {
    return { message: 'Service is working.' };
  }
}
