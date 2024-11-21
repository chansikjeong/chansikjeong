function solution(numbers) {
  var answer = 0;
  let s = 0;
  for (i = 0; i < numbers.length; i++) {
    s += numbers[i];
  }
  answer = s / numbers.length;
  return answer;
}
