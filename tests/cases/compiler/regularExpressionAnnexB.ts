// @target: esnext

const regexes: RegExp[] = [
  /\q\u\i\c\k\_\f\o\x\-\j\u\m\p\s/,
  /[\q\u\i\c\k\_\f\o\x\-\j\u\m\p\s]/,
  /\P[\P\w-_]/,

  // Compare to
  /\q\u\i\c\k\_\f\o\x\-\j\u\m\p\s/u,
  /[\q\u\i\c\k\_\f\o\x\-\j\u\m\p\s]/u,
  /\P[\P\w-_]/u,
];

const regexesWithBraces: RegExp[] = [
  /{??/,
  /{,??/,
  /{,1??/,
  /{1??/,
  /{1,??/,
  /{1,2??/,
  /{2,1??/,
  /{}??/,
  /{,}??/,
  /{,1}??/,
  /{1}??/,
  /{1,}??/,
  /{1,2}??/,
  /{2,1}??/,

  // Compare to
  /{??/u,
  /{,??/u,
  /{,1??/u,
  /{1??/u,
  /{1,??/u,
  /{1,2??/u,
  /{2,1??/u,
  /{}??/u,
  /{,}??/u,
  /{,1}??/u,
  /{1}??/u,
  /{1,}??/u,
  /{1,2}??/u,
  /{2,1}??/u,
];
