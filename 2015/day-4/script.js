'use strict';

// part-1

/* const md5 = require('md5');

const input = 'yzbqklnj';
let zeros = 0;
let result = md5(`${input}${zeros}`);

do {
  ++zeros;
  result = md5(`${input}${zeros}`);
  console.log(zeros, result);
  if (result.startsWith('00000')) {
    console.log(zeros);
    break;
  }
} while (!result.startsWith('00000')); */

// part-2

const md5 = require('md5');

const input = 'yzbqklnj';
let zeros = 0;
let result = md5(`${input}${zeros}`);

do {
  ++zeros;
  result = md5(`${input}${zeros}`);
  console.log(zeros, result);
  if (result.startsWith('000000')) {
    console.log(zeros);
    break;
  }
} while (!result.startsWith('000000'));
