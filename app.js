/**
 * 
-- Active: 1701075485721@@127.0.0.1@3307@mydatabase
-- 데이터베이스 생성
-- CREATE DATABASE MyOnlineShop;g

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
 */