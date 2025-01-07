import { Module } from '@nestjs/common';
import { ClaimExtractionService } from './services/claim-extraction.service';
import { VerificationService } from './services/verification.service';
import { DuplicateFilterService } from './services/duplicate-filter.service';
import { ScoringService } from './services/scoring.service';

@Module({
  providers: [ClaimExtractionService, VerificationService, DuplicateFilterService, ScoringService],
  exports: [ClaimExtractionService, VerificationService, DuplicateFilterService, ScoringService],
})
export class AiModule {}