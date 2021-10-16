import "./style.css";

import tests from "./tests/index";

console.clear();

const solution = (patternString) => {
  const CHAR = {
    "-": "_",
    U: "/",
    D: "\\",
  };

  const inc = {
    "-|D": 1,
    "D|D": 1,
    "U|-": -1,
    "U|U": -1,
  };

  const getInc = (prev, current) => inc[`${prev}|${current}`];

  const pattern = patternString.split("");
  let result = [];

  const pointer = { y: 0, x: 0 };

  pattern.forEach((item, index) => {
    if (!result[pointer.y]) result[pointer.y] = [];

    if (index > 0 && getInc(pattern[index - 1], item)) {
      pointer.y += getInc(pattern[index - 1], item);
    }
    if (pointer.y < 0) {
      result.unshift(Array(pointer.x).fill(" "));
      pointer.y = 0;
    } else if (pointer.y > result.length - 1) {
      result.push(Array(pointer.x).fill(" "));
    }
    result[pointer.y][pointer.x] = CHAR[item];

    result.forEach((_, row) => {
      if (!result[row][index]) result[row][index] = " ";
    });

    pointer.x++;
  });

  return result.map((row) => row.join("")).join("\n");
};

console.log(tests[2]);
console.log(solution(tests[2]));
