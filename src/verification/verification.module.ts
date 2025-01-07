import { Module } from '@nestjs/common';
import { VerificationService } from './services/verification.service';
import { VerificationController } from './controllers/verification.controller';

@Module({
  controllers: [VerificationController],
  providers: [VerificationService],
  exports: [VerificationService],
})
export class VerificationModule {}