function solution(food) {
  let arr = [];
  for (var i = 1; i < food.length; i++) {
    num = Math.floor(food[i] / 2);
    arr.push(i.toString().repeat(num));
  }
  return arr.join("") + 0 + arr.reverse().join("");
}

//   function solution(food) {
//     let res = '';
//     for (let i = 1; i < food.length; i++) {
//         res += String(i).repeat(Math.floor(food[i]/2));
//     }

//     return res + '0' + [...res].reverse().join('');
// }

// let food = [1, 3, 4, 6];
// solution(food);
// console.log(arr.join("") + 0 + arr.reverse().join(""));
