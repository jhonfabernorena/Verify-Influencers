import { Injectable } from '@nestjs/common';
import { Influencer } from '../models/influencers.model';

@Injectable()
export class InfluencersService {
  private influencers: Influencer[] = [];

  addInfluencer(influencer: Influencer): Influencer {
    this.influencers.push(influencer);
    return influencer;
  }

  getAllInfluencers(): Influencer[] {
    return this.influencers;
  }

  findInfluencerById(id: string): Influencer | undefined {
    return this.influencers.find(influencer => influencer.id === id);
  }
}