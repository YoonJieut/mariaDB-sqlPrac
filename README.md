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

### 현재 프로젝트에서 사용한 디비 쿼리문

```
-- Active: 1701075485721@@127.0.0.1@3307@testlogin

CREATE TABLE
    User (
        userID INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    Item (
        itemID INT AUTO_INCREMENT PRIMARY KEY,
        itemName VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT,
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    Cart (
        cartID INT AUTO_INCREMENT PRIMARY KEY,
        userID INT,
        itemID INT,
        quantity INT NOT NULL,
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userID) REFERENCES User(userID),
        FOREIGN KEY (itemID) REFERENCES Item(itemID)
    );

CREATE TABLE
    Payment (
        paymentID INT AUTO_INCREMENT PRIMARY KEY,
        userID INT,
        totalAmount DECIMAL(10, 2) NOT NULL,
        paymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userID) REFERENCES User(userID)
    );

-- 더미 데이터를 위한 작성문

INSERT INTO
    User (username, password, email)
VALUES (
        'user1',
        'password1',
        'user1@example.com'
    ), (
        'user2',
        'password2',
        'user2@example.com'
    ), (
        'user3',
        'password3',
        'user3@example.com'
    );

INSERT INTO
    Item (itemName, price, description)
VALUES (
        'Item 1',
        100.00,
        'Description for Item 1'
    ), (
        'Item 2',
        150.50,
        'Description for Item 2'
    ), (
        'Item 3',
        200.00,
        'Description for Item 3'
    );

INSERT INTO
    Cart (userID, itemID, quantity)
VALUES (1, 1, 2), (1, 3, 1), (2, 2, 3), (3, 1, 1);

INSERT INTO
    Payment (userID, totalAmount)
VALUES (1, 300.00), (2, 451.50), (3, 200.00);
```

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
