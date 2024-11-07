console.log(solution(14, 4)); // 작동확인

function solution(n, m) {
  var answer = [];
  let a = Math.max(n, m); // 주어진 수를 크고 작은 수로 나눔
  let b = Math.min(n, m);

  for (let c = b; c >= 1; c--) {
    // 최대공약수를 구해준다.  - 프로토 버전에 생각을 잘못해 1부터 올려나가다가 1만 출력되는 경험
    if (a % c == 0 && b % c == 0) {
      return [c, (a * b) / c]; // 최소공배수의 경우 두수를 곱한 값에 최대공약수를 나눠준 값이 된다.
    }
  }
  return answer;
}
