function solution(s, n) {
  let upper = [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    N,
    M,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  ];
  let lower = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    n,
    m,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  ];
  let answer = [];

  for (i = 0; i < s.length; i++) {
    var text = s[i];
    for (j = 0; j < upper.legth; j++) {
      if (text == upper[j]) {
        answer.push(upper[(j += n)]);
      } else if (text == lower[j]) {
        answer.push(lower[(j += n)]);
      }
    }
  }
  return answer.join(",");
}
