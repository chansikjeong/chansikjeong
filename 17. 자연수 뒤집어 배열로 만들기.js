function solution(n) {
  var answer = [];
  var arr = n.toString().split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    answer.push(Number(arr[i]));
  }
  return answer;
}

// function solution(n) {
//     // 문자풀이
//     // return (n+"").split("").reverse().map(v => parseInt(v));

//     // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n%10);
//         n = Math.floor(n/10);
//     } while (n>0);

//     return arr;
// }
