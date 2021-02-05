# CRUD2.0
If mysql is not working:
  Execute the following query in MYSQL Workbench
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

To install:
  npm install axios -> communicate between front end and backend.
  npm install express
  npm install body-parser -> grab variables from front end
  npm install mysql -> creates connection with database
  npm install nodemon -> run nodejs automatically
  npm install cors

For nodemon:
  add to package.json below the scripts section:
    "start": "node index.js",
    "devStart": "nodemon index.js",
  now to run the server type 'npm run devStart'
