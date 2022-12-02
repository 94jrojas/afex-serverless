import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ApiKeyGuard } from './auth/guards/apikey.guard';

@ApiBearerAuth()
@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'The API is working.' })
  getStatus() {
    return this.appService.getStatus();
  }
}
