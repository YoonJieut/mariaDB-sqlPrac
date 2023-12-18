const express = require("express");
const router = express.Router();
const db = require("../dbConfig"); // 데이터베이스 연결 설정 불러오기

// 사용자의 장바구니 목록 조회
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  console.log(`${userId}`);

  // 장바구니 목록 조회 쿼리
  const query = `
    SELECT c.cartID, c.quantity, i.itemName, i.price 
    FROM Cart c 
    JOIN Item i ON c.itemID = i.itemID 
    WHERE c.userID = ?
    `;

  // 데이터베이스 쿼리 실행
  db.query(query, [userId], (err, results) => {
    if (err) {
      res.status(500).send("Server error");
      console.error(err);
      return;
    }

    // 결과 반환
    console.log(`cart items : `, results);
    res.json(results);
  });
});

module.exports = router;
