'use strict';

const getInput = async function () {
  const response = await fetch('http://localhost:3000/api');
  const input = await response.json();
  return input;
};

const solve = async function () {
  // part one
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
  // part two
  omitX.forEach((e) => e.sort((a, b) => a - b));

  const ribbon = [];
  omitX.forEach((e) => {
    ribbon.push(e[0] * 2 + e[1] * 2);
    ribbon.push(e[0] * e[1] * e[2]);
  });
  let totalRibbon = 0;
  ribbon.forEach((e) => {
    totalRibbon += e;
  });
  console.log(totalRibbon);
  // console.log(omitX);
};

solve();
