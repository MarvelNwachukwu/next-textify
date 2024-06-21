const crypto = require('crypto');

class Textify {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static lowerCase(str) {
    return str.toLowerCase();
  }

  static upperCase(str) {
    return str.toUpperCase();
  }

  static reverse(str) {
    return str.split('').reverse().join('');
  }

  static trim(str) {
    return str.trim();
  }

  static truncate(str, length) {
    return str.length > length ? str.substring(0, length) + '...' : str;
  }

  static isEmpty(str) {
    return str.length === 0;
  }

  static kebabCase(str) {
    return str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s.toLowerCase())
      .join('-');
  }

  static snakeCase(str) {
    return str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s.toLowerCase())
      .join('_');
  }

  static camelCase(str) {
    return str
      .replace(/[_\s]+(.)/g, (match, chr) => chr.toUpperCase())
      .replace(/^(.)/, (match, chr) => chr.toLowerCase());
  }

  static pascalCase(str) {
    return str
      .replace(/_/g, ' ')
      .replace(/\W+(.)/g, (match, chr) => chr.toUpperCase())
      .replace(/\s+/g, '')
      .replace(/^(.)/, (match, chr) => chr.toUpperCase());
  }

  static titleCase(str) {
    return str
      .toLowerCase()
      .split(/[\s_]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  static sentenceCase(str) {
    return str
      .toLowerCase()
      .replace(/^\s*(.)|\s+(.)/g, (match, firstChar, subsequentChar) => {
        if (firstChar) {
          return firstChar.toUpperCase();
        }
        if (subsequentChar) {
          return ' ' + subsequentChar;
        }
        return match;
      });
  }

  static slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  static wordCount(str) {
    return str.split(/\W+/).length;
  }

  static charCount(str) {
    return str.length;
  }

  static sentenceCount(str) {
    return str.split('.').length;
  }

  static paragraphCount(str) {
    return str.split('\n\n').length;
  }

  static lineCount(str) {
    return str.split('\n').length;
  }

  static paragraphize(str) {
    return str
      .split('\n\n')
      .map((p) => p.trim())
      .join('\n\n');
  }

  static sentenceize(str) {
    return str
      .split('.')
      .map((s) => s.trim())
      .join('.');
  }

  static tokenize(str) {
    return str.split(/[\s,._-]+/).filter((token) => token.length > 0);
  }

  static wordify(str) {
    return str
      .split(/\W+/)
      .map((w) => w.trim())
      .filter((w) => w !== '');
  }


  static hashify256bits(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
  }
}

module.exports = Textify;
