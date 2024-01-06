// Queries/insertGalaxyTabDataQuery.js

module.exports = `
  INSERT INTO galaxy_tab_owners (user_name, galaxy_tab_model)
  VALUES
    ('John Doe', 'Galaxy Tab S7'),
    ('Jane Doe', 'Galaxy Tab S6'),
    ('Bob Smith', 'Galaxy Tab S7')
  ON DUPLICATE KEY UPDATE user_name = user_name;
`;
