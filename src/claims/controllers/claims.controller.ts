import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ClaimsService } from '../services/claims.service';
import { Claim } from '../models/claims.model';

@Controller('claims')
export class ClaimsController {
  constructor(private readonly claimsService: ClaimsService) {}

  @Post()
  createClaim(@Body() claim: Claim): Claim {
    return this.claimsService.createClaim(claim);
  }

  @Get()
  getClaims(): Claim[] {
    return this.claimsService.getClaims();
  }

  @Put(':id')
  updateClaim(@Param('id') id: string, @Body() updatedClaim: Partial<Claim>): Claim {
    return this.claimsService.updateClaim(id, updatedClaim);
  }
}