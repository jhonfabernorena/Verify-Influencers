import { Injectable } from '@nestjs/common';

@Injectable()
export class ClaimExtractionService {
  extractClaims(text: string): string[] {
    // Lógica para extraer afirmaciones
    return [];
  }
}