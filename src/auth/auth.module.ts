import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiKeyStrategy } from './strategies/apikey.strategy';
import { PassportModule } from '@nestjs/passport';
import { ApiKeysRepository } from './repositories/apikeys.repository';

@Module({
  imports: [PassportModule],
  providers: [AuthService, ApiKeyStrategy, ApiKeysRepository],
  exports: [AuthService],
})
export class AuthModule {}
