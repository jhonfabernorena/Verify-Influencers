import { Module } from '@nestjs/common';
import { ClaimsService } from './services/claims.service';
import { ClaimsController } from './controllers/claims.controller';

@Module({
  controllers: [ClaimsController],
  providers: [ClaimsService],
  exports: [ClaimsService],
})
export class ClaimsModule {}