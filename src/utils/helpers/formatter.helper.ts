export class FormatterHelper {
    static capitalizeFirstLetter(text: string): string {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  
    static truncateText(text: string, maxLength: number): string {
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }
  }
  