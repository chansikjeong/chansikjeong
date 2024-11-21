// pop() {
//     if (this.head === null) {    // 스택이 비어있으면
//         return null;             // 여기서도 메시지를 리턴하지말고 null 리턴!
//     }
//     let deleteHead = this.head;  // 제거할 node 를 변수에 잡습니다.
//     this.head = this.head.next;  // 그리고 head 를 현재 head 의 다음 걸로 잡으면 됩니다.
//     return deleteHead;           // 그리고 제거할 node 반환
// }

// pop() {
//     // 스택에 값이 있는지 체크
//     if(this.head === null ) {
//  return null;
// }
// // 제거할 헤드를 선언
// let delHead = this.head;
// // 헤드를 다음 순서의 값으로 바꿔줌
// this.head = this.head.next;
// // 반환
// return delHead
// };

//전체 코드
// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }

//   class Stack {
//     constructor() {
//       this.head = null;
//     }

//     peek() {
//       if (this.head === null) {
//         return null;
//       }
//       return this.head.value;
//     }

//     push(value) {
//       let newNode = new Node(value);
//       newNode.next = this.head;
//       this.head = newNode;
//     }

//     pop() {
//       if (this.head === null) {
//         return null;
//       }
//       let deleteHead = this.head;
//       this.head = this.head.next;
//       return deleteHead.value;
//     }
//   }

//   let stack = new Stack();

//   console.log(stack.peek()); // null, 스택이 비어 있음

//   stack.push(1);
//   console.log(stack.peek()); // 1

//   stack.push(2);
//   console.log(stack.peek()); // 2, 스택의 top이 2로 변경됨

//   console.log(stack.pop()); // 2, pop()으로 인해 2를 제거하고 반환
//   console.log(stack.peek()); // 1, 스택의 top이 1로 변경됨

//   console.log(stack.pop()); // 1, pop()으로 인해 1을 제거하고 반환
//   console.log(stack.peek()); // null, 스택이 비어 있음

//   console.log(stack.pop()); // null, 스택이 비어 있으므로 null 반환

function bubbleSort(array) {
  let n = array.length; // array의 길이를 n에 저장해요! 루프 카운트 변수로 쓰겠죠?
  for (let i = 0; i < n; i++) {
    // 이건 array를 순차적으로 돌겠다는 뜻이구요!
    // 이건 버블정렬 알고리즘의 특성처럼 1개씩 줄어들면서 반복하며 비교를 해요.
    for (let j = 0; j < n - i - 1; j++) {
      // n-1 -> n-1-1 -> n-2-1
      if (array[j] > array[j + 1]) {
        // 앞의 원소가 뒤의 원소보다 크면 바꿔야겠죠?
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(
  "정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",
  bubbleSort([4, 6, 2, 9, 1])
);
console.log(
  "정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",
  bubbleSort([3, -1, 17, 9])
);
console.log(
  "정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",
  bubbleSort([100, 56, -3, 32, 44])
);

function indexSort(array) {
  let a = array.length;
  for (let i = 0; i < a - 1; i++) {
    //기준이 될 인덱스값 지정
    let index = i;
    // 인덱스값 이후로 비교할 반복문
    for (let j = i + 1; j < a; j++) {
      if (array[j] < array[index]) {
        index = j;
      }
      //자리 바꿔주기
      let bound = array[i]; // 값이 바뀌기 전에 기존 값 담아두기
      array[i] = array[index];
      array[index] = bound;
    }
  }
  return array;
}
