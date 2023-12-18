// 필요한 모듈 불러오기
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const cartRouter = require("./routes/cartRouter");
const paymentRouter = require("./routes/paymentRouter");

// 정적 파일(HTML, CSS, JS) 서빙 설정
app.use(express.static(path.join(__dirname, "public")));

// 데이터베이스 설정 불러오기 (필요한 경우)
// const db = require('./dbConfig');

//라우터 모듈 불러오기
app.use("/api/cart", cartRouter);
app.use("/api/payments", paymentRouter);

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 서버 시작
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
