import { Controller, Post, Get, Body } from '@nestjs/common';
import { VerificationService } from '../services/verification.service';

@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Post()
  verifyClaim(@Body() data: { claimId: string; status: string; evidence: string[] }) {
    return this.verificationService.verifyClaim(data.claimId, data.status, data.evidence);
  }

  @Get()
  getAllVerifications() {
    return this.verificationService.getVerifications();
  }
}