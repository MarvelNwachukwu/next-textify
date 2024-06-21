// test.js
const Textify = require('./index');
const assert = require('assert');

assert.strictEqual(Textify.capitalize('hello'), 'Hello');
assert.strictEqual(Textify.lowerCase('HELLO'), 'hello');
assert.strictEqual(Textify.upperCase('hello'), 'HELLO');
assert.strictEqual(Textify.reverse('hello'), 'olleh');
assert.strictEqual(Textify.trim('  hello  '), 'hello');
assert.strictEqual(Textify.truncate('hello world', 5), 'hello...');
assert.strictEqual(Textify.isEmpty(''), true);
assert.strictEqual(Textify.kebabCase('Hello World'), 'hello-world');
assert.strictEqual(Textify.snakeCase('Hello World'), 'hello_world');
assert.strictEqual(Textify.camelCase('hello world'), 'helloWorld');
assert.strictEqual(Textify.pascalCase('hello world'), 'HelloWorld');
assert.strictEqual(Textify.titleCase('hello world'), 'Hello World');
assert.strictEqual(Textify.sentenceCase('hello world'), 'Hello world');
assert.strictEqual(Textify.slugify('Hello World'), 'hello-world');
assert.strictEqual(Textify.wordCount('hello world'), 2);
assert.strictEqual(Textify.charCount('hello world'), 11);
assert.strictEqual(Textify.sentenceCount('hello world'), 1);
assert.strictEqual(Textify.paragraphCount('hello world'), 1);
assert.strictEqual(Textify.lineCount('hello world'), 1);
assert.strictEqual(Textify.paragraphize('hello world'), 'hello world');
assert.strictEqual(Textify.sentenceize('hello world'), 'hello world');
assert.deepStrictEqual(Textify.tokenize('hello world'), ['hello', 'world']);
assert.deepStrictEqual(Textify.wordify('hello world'), ['hello', 'world']);
assert.strictEqual(Textify.hashify256bits('hello world'), 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9');

console.log('All tests passed!');