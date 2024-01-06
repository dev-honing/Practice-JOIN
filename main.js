// main.js
const mysql = require("mysql2");

// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test",
});

// TEST DB를 생성하는 쿼리문
const createDatabaseQuery = `
  CREATE DATABASE IF NOT EXISTS TEST
`;

// MariaDB에 연결하면 TEST DB를 생성
connection.connect((error) => {
  if (error) {
    console.error("DB 연결 오류: ", error.message);
  } else {
    console.log("DB 연결 성공");

    connection.query(createDatabaseQuery, (dbError) => {
      if (dbError) {
        console.error("DB 생성 오류: ", dbError.message);
      } else {
        console.log("DB 생성 성공 또는 이미 존재함");

        // TABLE을 생성하는 쿼리문
        //* Galaxy Tab 사용자
        const createGalaxyTabTable = `
          CREATE TABLE IF NOT EXISTS galaxy_tab_owners (
            user_number INT AUTO_INCREMENT PRIMARY KEY,
            user_name VARCHAR(255),
            galaxy_tab_model VARCHAR(255)
          );
        `;

        //* Ipad 사용자
        const createIpadTable = `
          CREATE TABLE IF NOT EXISTS Ipad_owners (
            user_number INT AUTO_INCREMENT PRIMARY KEY,
            user_name VARCHAR(255),
            Ipad_model VARCHAR(255)
          );
        `;

        // TABLE을 생성
        connection.query(createGalaxyTabTable, (galaxyTabError) => {
          if (galaxyTabError) {
            console.error('Galaxy Tab 테이블 생성 오류: ', galaxyTabError.message);
          } else {
            console.log('Galaxy Tab 테이블 생성 성공 또는 이미 존재함');
          }

          connection.query(createIpadTable, (iPadError) => {
            if (iPadError) {
              console.error('Ipad 테이블 생성 오류: ', iPadError.message);
            } else {
              console.log('Ipad 테이블 생성 성공 또는 이미 존재함');

              // Galaxy Tab 테이블에 더미 데이터 추가
              const insertGalaxyTabDataQuery = `
                INSERT INTO galaxy_tab_owners (user_name, galaxy_tab_model)
                VALUES
                  ('John Doe', 'Galaxy Tab S7'),
                  ('Jane Doe', 'Galaxy Tab S6'),
                  ('Bob Smith', 'Galaxy Tab S7');
              `;

              connection.query(insertGalaxyTabDataQuery, (insertGalaxyTabError) => {
                if (insertGalaxyTabError) {
                  console.error('Galaxy Tab 더미 데이터 삽입 오류: ', insertGalaxyTabError.message);
                } else {
                  console.log('Galaxy Tab 더미 데이터 삽입 성공');

                  // Ipad 테이블에 더미 데이터 추가
                  const insertIpadDataQuery = `
                    INSERT INTO Ipad_owners (user_name, Ipad_model)
                    VALUES
                      ('Alice Johnson', 'iPad Pro 12.9'),
                      ('Charlie Brown', 'iPad Air 4'),
                      ('Eva Martinez', 'iPad Mini 6');
                  `;

                  connection.query(insertIpadDataQuery, (insertIpadError) => {
                    if (insertIpadError) {
                      console.error('Ipad 더미 데이터 삽입 오류: ', insertIpadError.message);
                    } else {
                      console.log('Ipad 더미 데이터 삽입 성공');

                      // 연결 종료
                      connection.end();
                    }
                  });
                }
              });
            }
          });
        });
      }
    });
  }
});
