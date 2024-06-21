declare module 'next-textify' {

  export function textify(input: string): string;

  export interface TextifyOptions {
    option1?: string;
    option2?: number;
  }

  export default function nextTextify(input: string, options?: TextifyOptions): string;
}