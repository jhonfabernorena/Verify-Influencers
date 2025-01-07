import { Injectable } from '@nestjs/common';
@Injectable()
export class ConfigurationService {
  private readonly config = {
    apiUrl: process.env.API_URL || 'http://localhost:3000',
    trustThreshold: 70,
    claimFetchLimit: 100,
  };

  get(key: string): any {
    return this.config[key];
  }
}