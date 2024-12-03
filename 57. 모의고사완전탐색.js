// 수포자 1, 2, 3 패턴
const first = [1, 2, 3, 4, 5];
const second = [2, 1, 2, 3, 2, 4, 2, 5];
const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
// 정답 수
let result = [0, 0, 0];

// 정답 배열[i] 와 답 비교
for (let i = 0; i < answer.length; i++) {
  if (answer[i] === first[i % 5]) {
    result[0]++;
  }
  if (answer[i] === first[i % 8]) {
    result[1]++;
  }
  if (answer[i] === first[i % 10]) {
    result[2]++;
  }
}

let max = Math.max(...result);
for (let i = 0; i < 3; i++) {
  if (maxValue === result[i]) {
    answer[index] = i + 1;
    index++;
  }
}
return result;
