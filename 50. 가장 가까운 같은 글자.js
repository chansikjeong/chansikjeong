function solution(s) {
  var answer = [];
  s = s.split("");
  for (var i = 0; i < s.length; i++) {
    s_count = -1;
    for (var j = 0; j < i; j++) {
      if (s[i] == s[j]) {
        s_count = i - j;
      }
    }
    answer.push(s_count);
  }
  return answer;
}

// function solution(s) {
//     const hash={};

//     return [...s].map((v,i)=>{
//         let result = hash[v] !== undefined ? i - hash[v] : -1;
//         hash[v] = i;
//         return result;
//     });
// }
