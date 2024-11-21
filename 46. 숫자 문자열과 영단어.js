// function solution(s) {
//   let answer = 0;

//   s = s.replace(/zero/gi 0);
//   s = s.replace(/one/gi, 1);
//   s = s.replace(/two/gi, 2);
//   s = s.replace(/three/gi, 3);
//   s = s.replace(/four/gi, 4);
//   s = s.replace(/five/gi, 5);
//   s = s.replace(/six/gi, 6);
//   s = s.replace(/seven/gi, 7);
//   s = s.replace(/eight/gi, 8);
//   s = s.replace(/nine/gi, 9);

//   answer = Number(s);
//   return answer;
// }

function solution(s) {
  const num = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  while (isNaN(s))
    for (const key in num)
      if (s.indexOf(key) > -1) {
        s = s.replace(key, num[key]);
      }
  return Number(s);
}
