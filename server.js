// 필요한 모듈 불러오기
const express = require("express");
const app = express();
const port = 3000;
const cartRouter = require("./cartRouter");
const paymentRouter = require("./paymentRouter");

//라우터 모듈 불러오기
app.use("/api/cart", cartRouter);
app.use("/api/payments", paymentRouter);

// 데이터베이스 설정 불러오기 (필요한 경우)
// const db = require('./dbConfig');

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 서버 시작
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
