const ohajiki = document.getElementById("online");
const addCircle = document.getElementById("addBtn");
const removuBtm = document.getElementById("removeBtn");
const ohajiki2 = document.getElementById("online2");
const addCircle2 = document.getElementById("addBtn2");

// おはじきを追加するボタン
addCircle.addEventListener("click", () => {
  const div = document.createElement("div");
  div.className = "new-circle";
  ohajiki.appendChild(div);
});

// おはじきを削除するボタン
removuBtm.addEventListener("click", () => {
  window.location.reload();
});

// おはじきを追加するボタン2
addCircle2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.className = "new-circle2";
  ohajiki2.appendChild(div);
});

// 計算ノ答えを出す
const red = document.getElementById("amountR");
const blue = document.getElementById("amountB");
const goukei = document.getElementById("addBtn3");
const kotae = document.getElementById("amountA");

goukei.addEventListener("click", () => {
  // 入力された値を取り出す
  const R = red.value;
  const B = blue.value;
  // 　取り出した値を数字に変換する！！！！！
  const rr = Number(R);
  const bb = Number(B);

  console.log(rr + bb);

  kotae.textContent = rr + bb;
});
