// function rotateWord(word) {
//     let rotations = [];
//     for (let i = 0; i < word.length; i++) {
//         let rotated = word.slice(i) + word.slice(0, i);
//         rotations.push(rotated);
//     }
//     return rotations;
// }

// console.log(rotateWord("abc")); // ["abc", "bca", "cab"]

// function a(str){
//     let word =
//     for( i = 0 ; i;i++)
//     }
//     return
// }

function rotation(text) {
  let roat = [];
  for (let i = 0; i < text.length; i++) {
    // 글자 개수만큼 진행하기
    let r = text.slice(i) + text.slice(0, i); // 앞자리 i만큼 잘라낸것에 + i 만큼 잘라낸 부분
    roat.push(r); // roat 배열에 r을 진행시마다 집어넣어준다
  }
  return roat;
}

console.log(rotation("abcd"));
