// Queries/insertIpadDataQuery.js

module.exports = `
  INSERT INTO Ipad_owners (user_name, Ipad_model)
  VALUES
    ('Alice Johnson', 'iPad Pro 12.9'),
    ('Charlie Brown', 'iPad Air 4'),
    ('Eva Martinez', 'iPad Mini 6')
  ON DUPLICATE KEY UPDATE user_name = user_name;
`;
