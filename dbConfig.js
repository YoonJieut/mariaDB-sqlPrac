const mysql = require("mysql");

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: "localhost", // MariaDB 서버가 실행 중인 호스트
  port: "3307",
  user: "root", // 데이터베이스 사용자 이름
  password: "asd123", // 해당 사용자의 비밀번호 (실제 비밀번호로 대체해야 함)
  database: "testlogin", // 연결할 데이터베이스 이름
});

// 데이터베이스 연결
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

module.exports = db;
