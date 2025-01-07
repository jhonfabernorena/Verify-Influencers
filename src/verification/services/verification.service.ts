import { Injectable } from '@nestjs/common';
import { Verification } from '../models/verification.model';

@Injectable()
export class VerificationService {
  private verifications: Verification[] = [];

  verifyClaim(claimId: string, status: string, evidence: string[]): Verification {
    const verification: Verification = {
      id: `${Date.now()}`,
      claimId,
      status: status as 'Verified' | 'Questionable' | 'Debunked',
      confidenceScore: Math.random() * 100,
      evidence,
      verifiedAt: new Date(),
    };

    this.verifications.push(verification);
    return verification;
  }

  getVerifications(): Verification[] {
    return this.verifications;
  }
}