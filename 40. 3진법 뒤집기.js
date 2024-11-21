function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3); //mdn 예제 참고 //parseInt는 지정한 진법으로 정수를 돌려준다
}

console.log(solution(5));
