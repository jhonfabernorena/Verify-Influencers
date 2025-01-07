import { Injectable } from '@nestjs/common';

@Injectable()
export class DuplicateFilterService {
  removeDuplicates(claims: string[]): string[] {
    // Lógica para eliminar duplicados
    return Array.from(new Set(claims));
  }
}