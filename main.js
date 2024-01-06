// main.js
const mysql = require('mysql2');

// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
});

// TABLE 생성
