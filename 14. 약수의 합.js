function solution(n) {
  var answer = 0;
  for (var i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// function solution(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) sum += i
//     }
//     return sum
// }
