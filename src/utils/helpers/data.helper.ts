export class DateHelper {
    static formatDate(date: Date): string {
      return date.toISOString().split('T')[0];
    }
  
    static getCurrentTimestamp(): string {
      return new Date().toISOString();
    }
  }
  