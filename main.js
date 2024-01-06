// main.js

const mysql = require("mysql2");

const createDatabaseQuery = require("./Queries/createDatabaseQuery");
const createGalaxyTabTableQuery = require("./Queries/createGalaxyTabTableQuery");
const createIpadTableQuery = require("./Queries/createIpadTableQuery");
const insertGalaxyTabDataQuery = require("./Queries/insertGalaxyTabDataQuery");
const insertIpadDataQuery = require("./Queries/insertIpadDataQuery");

// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test",
});

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

        // TABLE을 생성
        connection.query(createGalaxyTabTableQuery, (galaxyTabError) => {
          if (galaxyTabError) {
            console.error(
              "Galaxy Tab 테이블 생성 오류: ",
              galaxyTabError.message
            );
          } else {
            console.log("Galaxy Tab 테이블 생성 성공 또는 이미 존재함");
          }

          connection.query(createIpadTableQuery, (iPadError) => {
            if (iPadError) {
              console.error("Ipad 테이블 생성 오류: ", iPadError.message);
            } else {
              console.log("Ipad 테이블 생성 성공 또는 이미 존재함");

              // Galaxy Tab 테이블에 더미 데이터 추가
              connection.query(
                insertGalaxyTabDataQuery,
                (insertGalaxyTabError) => {
                  if (insertGalaxyTabError) {
                    console.error(
                      "Galaxy Tab 더미 데이터 삽입 오류: ",
                      insertGalaxyTabError.message
                    );
                  } else {
                    console.log("Galaxy Tab 더미 데이터 삽입 성공");

                    // Ipad 테이블에 더미 데이터 추가
                    connection.query(insertIpadDataQuery, (insertIpadError) => {
                      if (insertIpadError) {
                        console.error(
                          "Ipad 더미 데이터 삽입 오류: ",
                          insertIpadError.message
                        );
                      } else {
                        console.log("Ipad 더미 데이터 삽입 성공");

                        // 연결 종료
                        connection.end();
                      }
                    });
                  }
                }
              );
            }
          });
        });
      }
    });
  }
});
