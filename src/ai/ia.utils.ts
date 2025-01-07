export class AIUtils {
    static preprocessText(text: string): string {
      return text.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
    }
  
    static formatResults(results: any[]): any[] {
      return results.map(result => ({
        claim: result.claim,
        status: result.status,
        confidence: result.confidence.toFixed(2),
      }));
    }
  
    static validateInput(input: string): boolean {
      return input && input.trim().length > 0;
    }
  }