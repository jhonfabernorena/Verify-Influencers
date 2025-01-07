import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InfluencersService } from '../services/influencers.service';
import { Influencer } from '../models/influencers.model';

@Controller('influencers')
export class InfluencersController {
  constructor(private readonly influencersService: InfluencersService) {}

  @Post()
  addInfluencer(@Body() influencer: Influencer) {
    return this.influencersService.addInfluencer(influencer);
  }

  @Get()
  getAllInfluencers() {
    return this.influencersService.getAllInfluencers();
  }

  @Get(':id')
  getInfluencerById(@Param('id') id: string) {
    return this.influencersService.findInfluencerById(id);
  }
}
