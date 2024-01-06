// Queries/createIpadTableQuery.js

module.exports = `
  CREATE TABLE IF NOT EXISTS Ipad_owners (
    user_number INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) UNIQUE,
    Ipad_model VARCHAR(255)
  );
`;
