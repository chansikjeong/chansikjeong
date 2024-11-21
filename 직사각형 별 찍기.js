process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" "); // 입력된 값을 배열로 나눈다
  const a = Number(n[0]),
    b = Number(n[1]); // a에 별의 갯수,  b에 줄의 갯수

  for (let i = 0; i < b; i++) {
    // b번만큼 줄을 생성
    let star = "";

    for (let j = 0; j < a; j++) {
      star += "*"; // a만큼 별을 찍어준다
    }

    console.log(star);
  }
});
