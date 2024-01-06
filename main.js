// main.js
const mysql = require('mysql2');

// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
});


// JOIN DB를 생성하는 쿼리문
const createDatabaseQuery = `
  CREATE DATABASE IF NOT EXISTS JOIN
  `;

// MariaDB에 연결하면 JOIN DB를 생성 
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

// TABLE 생성
