import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // This function returns status of the API
  getStatus(): Promise<any> {
    // Return promise
    return new Promise((resolve) => {
      // Resolve promise
      resolve({ message: 'Service is working.' });
    });
  }
}
