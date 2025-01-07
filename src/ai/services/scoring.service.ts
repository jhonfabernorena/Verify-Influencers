// scoring.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScoringService {
  calculateScore(claim: string): number {
    // Lógica para calcular puntuaciones
    return Math.random();
  }
}