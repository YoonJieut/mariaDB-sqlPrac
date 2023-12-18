## 사용 테스트 방법

가상 더미파일은 1~3까지만 존재한다.
프론트앤드 단위에서 이를 활용하여 컴포넌트를 생성하고 조정하는 것은 아직 구현되지 않았다.

### 엔드포인트를 통한 db 조회 기능 구현

```
http://localhost:3000/api/cart/3
```

```
http://localhost:3000/api/payments/2
```

### server.js와 router 모듈, 그리고 dbConfig파일을 설정하여 파일을 분리하고 관리해본다.

```
- 프로젝트 루트
  - public
    - index.html
    - styles.css
    - app.js
  - routes
    - cartRouter.js
    - paymentRouter.js
  - dbConfig.js
  - server.js

```

1. 정적 파일 서빙을 위한 express.static
2. api 경로, 엔드포인트로 추가된 api로 처리를 추가했다.
   ex) '/api/cart/...' 또는 '/api/payments/{아이디}'를 작성하면 console.log를 통해 관련 데이터를 조회할 수 있다.
3.

## 여기에 사용된 쿼리문

1. db에 어드민 권한을 준 후 로그인한다.
2. db를 생성하고 관계 설정을 한다.

## db 설정이 끝났으면 server.js와 라우터에 추가하기

### db 관련 쿼리문 저장용

-- Active: 1701075485721@@127.0.0.1@3307@mydatabase
-- 데이터베이스 생성
-- CREATE DATABASE MyOnlineShop;

-- 사용할 데이터베이스 선택
USE mydatabase;

-- Users 테이블 생성
CREATE TABLE Users (
userID INT AUTO_INCREMENT PRIMARY KEY,
inputID VARCHAR(50),
email VARCHAR(100)
);

-- Pokemon 테이블 생성
CREATE TABLE Pokemon (
PokemonID INT AUTO_INCREMENT PRIMARY KEY,
PokemonName VARCHAR(100),
PokemonNumber INT
);

-- Orders 테이블 생성
CREATE TABLE Orders (
orderID INT AUTO_INCREMENT PRIMARY KEY,
userID INT,
PokemonID INT,
orderDate DATE,
FOREIGN KEY (userID) REFERENCES Users(userID),
FOREIGN KEY (PokemonID) REFERENCES Pokemon(PokemonID)
);

CREATE VIEW UserOrders AS
SELECT Users.userID, Users.name, Orders.orderID, Orders.orderDate
FROM Users
JOIN Orders ON Users.userID = Orders.userID;

###
