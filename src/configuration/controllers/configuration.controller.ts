import { Controller, Get, Param } from '@nestjs/common';
import { ConfigurationService } from '../services/configuration.service';

@Controller('configuration')
export class ConfigurationController {
  constructor(private readonly configService: ConfigurationService) {}

  @Get(':key')
  getConfig(@Param('key') key: string): any {
    return this.configService.get(key);
  }
}