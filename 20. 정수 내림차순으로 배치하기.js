function solution(n) {
  n = Number(n.toString().split("").sort().reverse().join(""));
  return n;
}

// function solution(n) {
//   const newN = n + "";
//   const newArr = newN
//     .split("")
//     .sort()
//     .reverse()
//     .join("");

//   return +newArr;
// }
