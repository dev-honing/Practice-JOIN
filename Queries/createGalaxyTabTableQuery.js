// Queries/createGalaxyTabTableQuery.js

module.exports = `
  CREATE TABLE IF NOT EXISTS galaxy_tab_owners (
    user_number INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) UNIQUE,
    galaxy_tab_model VARCHAR(255)
  );
`;
