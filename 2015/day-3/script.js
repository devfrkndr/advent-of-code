'use strict';

import { input } from './input.js';

const way = [[0, 0]];

const findWay = function (arr, sign) {
  for (let i = 0; i < sign.length; i++) {
    if (sign[i] === '^') {
      arr.push([arr[i][0] + 1, arr[i][1]]);
    } else if (sign[i] === 'v') {
      arr.push([arr[i][0] - 1, arr[i][1]]);
    } else if (sign[i] === '>') {
      arr.push([arr[i][0], arr[i][1] + 1]);
    } else if (sign[i] === '<') {
      arr.push([arr[i][0], arr[i][1] - 1]);
    }
  }
  return arr;
};

const giftedHouses = findWay(way, input);

const sorted = giftedHouses.sort();

const jsonString = [];

for (let i = 0; i < sorted.length; i++) {
  jsonString.push(JSON.stringify(sorted[i]));
}

let noLuckyHouses = 0;
let luckyHouses = 0;

for (let i = 0; i < jsonString.length; i++) {
  if (
    jsonString[i] !== jsonString[i + 1] &&
    jsonString[i] !== jsonString[i - 1]
  ) {
    noLuckyHouses += 1;
  }
}

for (let i = 0; i < jsonString.length; i++) {
  if (
    jsonString[i] === jsonString[i + 1] &&
    jsonString[i] !== jsonString[i - 1]
  ) {
    luckyHouses += 1;
  }
}

const part1 = noLuckyHouses + luckyHouses;
console.log(`Part 1 = ${part1}`);

const santaWay = [[0, 0]];
const roboWay = [[0, 0]];

const santaArr = [];
const roboArr = [];

const inputArray = Array.from(input);

inputArray.forEach((e, i) => {
  if (i === 0 || i % 2 === 0) {
    santaArr.push(e);
  }
});

inputArray.forEach((e, i) => {
  if (i !== 0 && i % 2 === 1) {
    roboArr.push(e);
  }
});

const santaGifted = findWay(santaWay, santaArr);
const roboGifted = findWay(roboWay, roboArr);

const santaPlusRobo = santaGifted.concat(roboGifted);

const sortedSantaRobo = santaPlusRobo.sort();

const jsonSantaRoboSorted = [];

for (let i = 0; i < sortedSantaRobo.length; i++) {
  jsonSantaRoboSorted.push(JSON.stringify(sortedSantaRobo[i]));
}

let noLuckyHouses2 = 0;
let luckyHouses2 = 0;

for (let i = 0; i < jsonSantaRoboSorted.length; i++) {
  if (
    jsonSantaRoboSorted[i] !== jsonSantaRoboSorted[i + 1] &&
    jsonSantaRoboSorted[i] !== jsonSantaRoboSorted[i - 1]
  ) {
    noLuckyHouses2 += 1;
  }
}

for (let i = 0; i < jsonSantaRoboSorted.length; i++) {
  if (
    jsonSantaRoboSorted[i] === jsonSantaRoboSorted[i + 1] &&
    jsonSantaRoboSorted[i] !== jsonSantaRoboSorted[i - 1]
  ) {
    luckyHouses2 += 1;
  }
}
console.log(`Part 2 = ${noLuckyHouses2 + luckyHouses2}`);
