function solution(n) {
  var answer = 0;
  for (var i = n; i > 0; i--) {
    if (n % i == 1) {
      answer = i;
    }
  }
  return answer;
}

// function solution(n, x = 1) {
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }
// }

// // function solution(n, x = 0) {
// //     return n % x === 1 ? x : solution(n, x + 1);
// // }
