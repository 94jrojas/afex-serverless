import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // This function returns status of the API
  getStatus(): Promise<any> {
    // Return promise
    return Promise.resolve({ message: 'Service is working.' });
  }
}
