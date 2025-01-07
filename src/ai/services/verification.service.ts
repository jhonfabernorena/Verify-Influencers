import { Injectable } from '@nestjs/common';

@Injectable()
export class VerificationService {
  verifyClaim(claim: string): { verified: boolean; sources: string[]; confidence: number } {
    // Lógica para verificar afirmaciones
    return { verified: false, sources: [], confidence: 0 };
  }
}