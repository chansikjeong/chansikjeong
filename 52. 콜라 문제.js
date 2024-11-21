function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    let bottle = b * Math.floor(n / a);
    answer += bottle;
    n = bottle + (n % a);
  }
  return answer;
}

// solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
