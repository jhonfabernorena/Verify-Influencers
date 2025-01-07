import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDto } from '../dto/create-report.dto';
import { Report } from '../entities/report.entity';

@Injectable()
export class ReportsService {
  private reports: Report[] = [];
  private currentId = 1;

  create(createReportDto: CreateReportDto): Report {
    const newReport: Report = {
      id: this.currentId++,
      title: createReportDto.title,
      content: createReportDto.content,
      createdAt: new Date(),
    };
    this.reports.push(newReport);
    return newReport;
  }

  findAll(): Report[] {
    return this.reports;
  }

  findOne(id: number): Report {
    const report = this.reports.find((r) => r.id === id);
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return report;
  }

  update(id: number, updateReportDto: Partial<CreateReportDto>): Report {
    const report = this.findOne(id);
    if (updateReportDto.title) {
      report.title = updateReportDto.title;
    }
    if (updateReportDto.content) {
      report.content = updateReportDto.content;
    }
    return report;
  }

  remove(id: number): void {
    const reportIndex = this.reports.findIndex((r) => r.id === id);
    if (reportIndex === -1) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    this.reports.splice(reportIndex, 1);
  }
}
