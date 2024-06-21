declare module 'next-textify' {
  class Textify {
    static capitalize(str: string): string;
    static lowerCase(str: string): string;
    static upperCase(str: string): string;
    static reverse(str: string): string;
    static trim(str: string): string;
    static truncate(str: string, length: number): string;
    static isEmpty(str: string): boolean;
    static kebabCase(str: string): string;
    static snakeCase(str: string): string;
    static camelCase(str: string): string;
    static pascalCase(str: string): string;
    static titleCase(str: string): string;
    static sentenceCase(str: string): string;
    static slugify(str: string): string;
    static wordCount(str: string): number;
    static charCount(str: string): number;
    static sentenceCount(str: string): number;
    static paragraphCount(str: string): number;
    static lineCount(str: string): number;
    static paragraphize(str: string): string;
    static sentenceize(str: string): string;
    static tokenize(str: string): string[];
    static wordify(str: string): string[];
    static hashify256bits(str: string): string;
  }

  export = Textify;
}