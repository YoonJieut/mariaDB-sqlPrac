const express = require("express");
const router = express.Router();
const db = require("../dbConfig"); // db 연결 설정 불러오기

// 사용자의 결제 목록 조회
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  console.log(`Fetching payments for user: ${userId}`); // 유저 ID 로그

  // 데이터베이스에서 userId에 해당하는 결제 목록 조회 로직
  // 1. 조회 쿼리 작성
  const query = `SELECT * FROM Payment WHERE userID = ?`;
  // 2. 데이터 베이스 쿼리 실행
  db.query(query, [userId], (err, results) => {
    if (err) {
      res.status(500).send("Server error");
      console.error(err);
      return;
    }
    // 결과 반환
    console.log("Payment history: ", results); // 쿼리 결과 로그
    res.json(results);
  });
});

module.exports = router;
