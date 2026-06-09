//User Email Extractor Q1
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'users.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Could not find users.json at:", filePath);
    return;
  }

  try {
    const users = JSON.parse(data);
    const emails = users.map(user => user.email).join('\n');

    fs.writeFile(path.join(__dirname, 'emails.txt'), emails, (err) => {
      if (err) throw err;
      console.log("Success! Emails saved to emails.txt");
    });
  } catch (e) {
    console.error("Error parsing JSON:", e);
  }
});

