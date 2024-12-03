function solution(k, score) {
  const top_k = [];
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      top_k.push(score[i]);
    }
    if (score[i] > Math.min(...top_k)) {
      top_k.pop();
      top_k.push(score[i]);
      top_k.sort((a, b) => b - a);
    }
    result.push(top_k.at(-1));
  }
  return result;
}

// function solution(k, score) {
//     const stack = []
//     return score.reduce((a,c) => {
//         if(stack.length < k) {
//             stack.push(c)
//             stack.sort((a,b) => a - b)
//         }
//         else {
//             stack.push(c)
//             stack.sort((a,b) => a - b)
//             stack.shift()
//         }
//         a.push(stack[0])
//         return a
//     },[])
// }

//다른 풀이 22

// function solution(k, score) {
//     var answer = [];

//     return score.reduce((acc, cur) => {
//         answer.push(cur);
//         answer = answer.sort((a, b) => b - a).slice(0, k);
//         return [...acc, Math.min(...answer)];
//     }, []);
// }
