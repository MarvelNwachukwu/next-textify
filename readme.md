# next-textify

next-textify is a JavaScript library that provides various text transformation functions. It includes functions for capitalizing, lowercasing, uppercasing, reversing, trimming, truncating, checking for emptiness, converting to kebab case, snake case, camel case, and pascal case. It also includes functions for counting words, characters, sentences, paragraphs, lines, and tokenizing text.

## Installation

To use next-textify in your project, you can install it via npm:

```
npm install next-textify
```

To use next-textify, you can import the functions you need from the library. Here's an example:

```sh
const { capitalize, lowerCase, upperCase, reverse, trim, truncate, isEmpty, kebabCase, snakeCase, camelCase, pascalCase, titleCase, sentenceCase, wordCount, charCount, sentenceCount, paragraphCount, lineCount, paragraphize, sentenceize, tokenize, wordify, hashify256bits } = require('next-textify');

```

Then use imported functions in your code

```

const str = 'Hello World';

const capitalizedStr = capitalize(str); // Returns "Hello World"
const lowercasedStr = lowerCase(str); // Returns "hello world"
const uppercasedStr = upperCase(str); // Returns "HELLO WORLD"
const reversedStr = reverse(str); // Returns "dlrow olleH"
const trimmedStr = trim(str); // Returns "Hello World"
const truncatedStr = truncate(str, 5); // Returns "Hello"
const isEmptyStr = isEmpty(str); // Returns false
const kebabCasedStr = kebabCase(str); // Returns "hello-world"
const snakeCasedStr = snakeCase(str); // Returns "hello_world"
const camelCasedStr = camelCase(str); // Returns "helloWorld"
const pascalCasedStr = pascalCase(str); // Returns "HelloWorld"
const titleCasedStr = titleCase(str); // Returns "Hello World"
const sentenceCasedStr = sentenceCase(str); // Returns "Hello world"
const wordCountResult = wordCount(str); // Returns 2
const charCountResult = charCount(str); // Returns 11
const sentenceCountResult = sentenceCount(str); // Returns 1
const paragraphCountResult = paragraphCount(str); // Returns 1
const lineCountResult = lineCount(str); // Returns 1
const paragraphizedStr = paragraphize(str); // Returns "Hello World\n"
const sentenceizedStr = sentenceize(str); // Returns "Hello world."
const tokenizedStr = tokenize(str); // Returns ["Hello", "World"]
const wordifiedStr = wordify(str); // Returns "Hello World"
const hashifiedStr = hashify256bits(str); // Returns "hashed string"
```
