# CPSC-406 Decentralized Social Media Platform

## client (Front-End)
The client folder contains the front-end portion of the decentralized social media platform.

### Week 8 Functionality

### Functionality Pending Implementation

## server



# Build Instructions

Prior to cloning the project files and installing dependencies the project requires the following installations:
### Install PostgresSQL Database 
- Install PostgresSQL database and PGAdmin (GUI tool used to interact with the Postgres database)
    - https://www.postgresql.org/download/ from this page you will see there are several options for downloading pre-built packages select the package that best suits your operating system.
    - Select operating system.
    - Select install package. (The "Interactive installer by EDB" includes both the PostgreSQL DB and PGAdmin tool.)
    - Once you've downloaded and installed the installer you'll need to execute the installation program.
    - Work through the installers prompts until installation is complete. (For this project the default selections will suffice.)
    <br> Note: Make note of selected default password as this will be used in the server database configuration process.
### Connect and Create DSMP Database in PGAdmin
- Once the installation process is completed initiate the PGAdmin Application.
- Double click the "Server" icon located on the left sidebar of the application.
- Once prompted enter the default password selected in the previous steps.
- Right click on the "Database" icon and select create Database.
- Once the "Create-Datbase" window appears enter database name: dsmp
- Select "Save" to create database. (No other information is required at this point).


1. Clone the project file: https://github.com/clopez13/DSMP.git
2. If user does not have nodejs previously installed use the following link to install the best suited version : https://nodejs.org/en/download
(User can install nodejs in project directory in order to avoid installing it globally.)
3. Using the termial cd into the client folder. Once inside of the client folder install the following dependencies:
* npm install react-router-dom@latest
* npm install react-hook-form
* npm install axios@0.22.0

4. Inside of the server folder install the following dependencies
* npm install cors
* npm install express 
* npm install sequelize
5. In Server/config folder the db.config.js file must be updated to match password.
6. Using the terminal cd into the server folder
7. Enter the following command in the terminal: node server.js
8. Server opens in localhost:8080
9. Using the terminal cd into the client folder.
10. Enter the following command in the terminal: npm start \
11. client opens in localhost:8081

