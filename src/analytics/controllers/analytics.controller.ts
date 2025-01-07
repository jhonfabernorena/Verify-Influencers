import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from '../services/analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('calculate')
  calculateAnalytics(@Query('data') data: any[]) {
    return this.analyticsService.calculateAnalytics(data);
  }
}
