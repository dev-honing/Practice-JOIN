// main.js
const mysql = require('mysql2');

// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
});


// TEST DB를 생성하는 쿼리문
const createDatabaseQuery = `
  CREATE DATABASE IF NOT EXISTS TEST
  `;

// MariaDB에 연결하면 TEST DB를 생성 
connection.connect((error) => {
  if (error) {
    console.error('DB 연결 오류: ', error.message);
  } else {
    console.log('DB 연결 성공');
  }

  connection.query(createDatabaseQuery, (dbError) => {
    if (dbError) {
      console.error('DB 생성 오류: ', dbError.message);
    } else {
      console.log('DB 생성 성공 또는 이미 존재함');
    }
  })
})

// TABLE을 생성하는 쿼리문
//* Galaxy Tab 사용자
const createGalaxyTabTable = `
  CREATE TABLE galaxy_tab_owners (
  user_id INT PRIMARY KEY,
  user_name VARCHAR(255),
  galaxy_tab_model VARCHAR(255)
);
`;

//* Ipad 사용자
const createIpadTable = `
  CREATE TABLE Ipad_owners (
    user_id INT PRIMARY KEY,
    user_name VARCHAR(255),
    Ipad_model VARCHAR(255)
  );
`;