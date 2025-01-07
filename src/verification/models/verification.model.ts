export class Verification {
    id: string;
    claimId: string;
    status: 'Verified' | 'Questionable' | 'Debunked';
    confidenceScore: number;
    evidence: string[];
    verifiedAt: Date;
  }