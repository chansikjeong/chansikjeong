// function solution(strings, n) {
//     // strings 배열
//     // n 번째 문자열 비교
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }

function solution(strings, n) {
  var answer = [];

  for (var a = 0; a < strings.length; a++) {
    strings[a] = strings[a][n] + strings[a];
  }

  strings.sort();

  for (var b = 0; b < strings.length; b++) {
    strings[b] = strings[b].replace(strings[b][0], "");
    answer.push(strings[b]);
  }
  return answer;
}
