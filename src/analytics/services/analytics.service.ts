import { Injectable } from '@nestjs/common';
import { Analytics } from '../models/analytics.model';

@Injectable()
export class AnalyticsService {
  calculateAnalytics(data: any[]): Analytics {
    const verified = data.filter(d => d.status === 'Verified').length;
    const questionable = data.filter(d => d.status === 'Questionable').length;
    const debunked = data.filter(d => d.status === 'Debunked').length;
    const total = data.length;

    const trustScore = ((verified - debunked) / total) * 100;

    return {
      influencerId: data[0]?.influencerId || 'unknown',
      claimCount: total,
      verifiedCount: verified,
      questionableCount: questionable,
      debunkedCount: debunked,
      trustScore: trustScore > 0 ? trustScore : 0,
    };
  }
}
