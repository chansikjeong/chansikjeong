function solution(n) {
  let s = String(n);
  let a = s.split("");
  let sum = 0;
  for (i = 0; i < a.length; i++) {
    sum += Number(a[i]);
  }
  return sum;
}

// function solution(n){
//     // 쉬운방법
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }
