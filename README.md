# Comics_Server
-Run on localhost

  Create a folder of any name
  
  open the terminal in abouve directory
  
  ```bash
  git clone "https://github.com/SAVAGEBEAN/Comics_Server.git"
  ```
  
  Installing dependencies
  ```bash
  npm install
  ```
  
  **Create .env file and add values of exactly these names**
  * `PORT` for running server on this port.
  * `DB_CONNECTION` Database connection link.
  * `TOKEN_SECRET` For user authentication from JWT.
  
  To Run the server on localhost:
  ```bash
  npm start
  ```
