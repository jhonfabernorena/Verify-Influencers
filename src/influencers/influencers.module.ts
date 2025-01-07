import { Module } from '@nestjs/common';
import { InfluencersService } from './services/influencers.service';
import { InfluencersController } from './controllers/influencers.controller';

@Module({
  controllers: [InfluencersController],
  providers: [InfluencersService],
  exports: [InfluencersService],
})
export class InfluencersModule {}