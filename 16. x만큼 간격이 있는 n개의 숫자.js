function solution(x, n) {
  var answer = [];
  for (var i = 0; i < n; i++) {
    answer.push(x + i * x);
  }
  return answer;
}

// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }
