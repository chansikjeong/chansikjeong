function solution(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// function average(array){
//     return array.reduce((a,b) => a+b) / array.length;
//   }

//   // 아래는 테스트로 출력해 보기 위한 코드입니다.
//   var testArray = [5,3,4]
//   console.log("평균값 : " + average(testArray));
