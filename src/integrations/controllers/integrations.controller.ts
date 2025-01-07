import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { IntegrationsService } from '../services/integrations.service';

@Controller('integrations')
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Get('fetch')
  async fetchData(@Query('apiUrl') apiUrl: string) {
    return this.integrationsService.fetchDataFromApi(apiUrl);
  }

  @Post('post')
  async postData(@Query('apiUrl') apiUrl: string, @Body() data: any) {
    return this.integrationsService.postDataToApi(apiUrl, data);
  }
}
