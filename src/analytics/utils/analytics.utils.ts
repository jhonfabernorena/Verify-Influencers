export class AnalyticsUtils {
    static normalizeData(data: any[]): any[] {
      return data.map(item => ({
        influencerId: item.influencerId || 'unknown',
        status: item.status || 'Unknown',
        confidence: item.confidence || 0,
      }));
    }
  
    static filterClaims(data: any[], status: string): any[] {
      return data.filter(item => item.status === status);
    }
  }
  