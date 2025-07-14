tent = results[idx];
});const results = [
  "大吉🎉", 
  "中吉😊", 
  "小吉🙂", 
  "吉😌", 
  "末吉😅", 
  "凶😢", 
  "大凶😱"
];

const btn = document.getElementById("drawBtn");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * results.length);
  resultDiv.textCon
