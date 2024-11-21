function solution(sizes) {
  let long = [];
  let short = [];
  for (i = 0; i < sizes.length; i++) {
    if (sizes[i][0] >= sizes[i][1]) {
      long.push(sizes[i][0]);
      short.push(sizes[i][1]);
    } else {
      long.push(sizes[i][1]);
      short.push(sizes[i][0]);
    }
  }
  let longMax = Math.max(...long);
  let shortMax = Math.max(...short);

  return longMax * shortMax;
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

console.log(solution(sizes));

// function solution(sizes) {
//     const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
//     return hor * ver;
// }
