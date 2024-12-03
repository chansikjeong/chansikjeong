function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let selDay = new Date(2016, a - 1, b);
  return day[selDay.getDay()];
}

// let a = 5;
// let b = 24;
// //월은 0부터 시작 11까지
// let selectDay = new Date(2016, a-1, b);
// console.log(selDay);

// console.log(selDay.getDay());
