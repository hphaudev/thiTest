// BT1:
function KTSoNT(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function TinhTong(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (KTSoNT(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(TinhTong(10, 50));
// BT2 Viết một function có tên numberOneTriangle(). Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác
function numberOneTriangle(n) {
  if (n < 1 || n > 10) {
    console.log("Hãy nhập số trong khoảng từ 1 đến 10!");
    return;
  }
  for (let i = 1; i <= n; i++) {
    let TamGiac = "";
    for (let j = 1; j <= i; j++) {
      TamGiac += "1";
    }
    console.log(TamGiac);
  }
}

numberOneTriangle(6);
