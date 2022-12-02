import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

// This class is used to validate the API key, verify the API key in header x-api-key
@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'x-api-key',
) {
  constructor(private authService: AuthService) {
    super(
      {
        header: 'x-api-key',
        prefix: '',
      },
      true,
      async (apiKey, done) => {
        if (this.authService.validateApiKey(apiKey)) {
          done(null, true);
        }
        done(new UnauthorizedException(), null);
      },
    );
  }
}
