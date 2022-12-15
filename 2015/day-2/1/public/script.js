'use strict';

console.log('furkan');

const getInput = async function () {
  const response = await fetch('http://localhost:3000/api');
  const input = await response.json();
  return input;
};

const solve = async function () {
  const input = await getInput();
  const toArray = input.split('\n');
  toArray.pop();
  const omitX = [];
  toArray.forEach((e) => {
    omitX.push(e.split('x'));
  });
  const firstSide = [];
  const secondSide = [];
  const thirdSide = [];
  const smallestSide = [];
  omitX.forEach((e) => {
    firstSide.push(2 * e[0] * e[1]);
    secondSide.push(2 * e[1] * e[2]);
    thirdSide.push(2 * e[2] * e[0]);
  });
  for (let i = 0; i < firstSide.length; i++) {
    smallestSide.push(
      Math.min(firstSide[i] / 2, secondSide[i] / 2, thirdSide[i] / 2)
    );
  }
  const totals = firstSide.concat(secondSide, thirdSide, smallestSide);
  let total = 0;
  totals.forEach((e) => {
    total += e;
  });
  console.log(total);
};

solve();
