// 필요한 모듈 불러오기
const express = require("express");
const mysql = require("mysql");

// Express 애플리케이션 생성
const app = express();

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: "3307",
  user: "adminTest", // 데이터베이스 사용자 이름
  password: "asd123", // 데이터베이스 비밀번호
  database: "TestLogin", // 연결할 데이터베이스 이름
});

// 데이터베이스 연결
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 서버 시작
app.listen("3000", () => {
  console.log(`http://localhost:3000`);
});
