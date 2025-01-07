import { Injectable } from '@nestjs/common';
import { Claim } from '../models/claims.model';

@Injectable()
export class ClaimsService {
  private claims: Claim[] = [];

  createClaim(claim: Claim): Claim {
    this.claims.push(claim);
    return claim;
  }

  getClaims(): Claim[] {
    return this.claims;
  }

  updateClaim(id: string, updatedClaim: Partial<Claim>): Claim {
    const index = this.claims.findIndex(claim => claim.id === id);
    if (index > -1) {
      this.claims[index] = { ...this.claims[index], ...updatedClaim };
      return this.claims[index];
    }
    return null;
  }
}
