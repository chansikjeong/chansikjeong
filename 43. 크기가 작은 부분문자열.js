function solution(t, p) {
  let result = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let cw = t.slice(i, i + p.length);
    if (cw <= p) {
      result++;
    }
  }
  return result;
}

// function solution(t, p) {
//     let count = 0;
//     for(let i=0; i<=t.length-p.length; i++) {
//         let value = t.slice(i, i+p.length);
//         if(+p >= +value) count++;
//     }
//     return count;
// }
