import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class IntegrationsService {
  constructor(private readonly httpService: HttpService) {}

  async fetchDataFromApi(apiUrl: string): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.get(apiUrl));
      return response.data;
    } catch (error) {
      throw new HttpException(
        `Failed to fetch data from ${apiUrl}: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async postDataToApi(apiUrl: string, data: any): Promise<any> {
    try {
      const response = await lastValueFrom(this.httpService.post(apiUrl, data));
      return response.data;
    } catch (error) {
      throw new HttpException(
        `Failed to post data to ${apiUrl}: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
