# CPSC-406 Decentralized Social Media Platform

## client (Front-End)
The client folder contains the front-end portion of the decentralized social media platform.

### Week 8 Functionality

### Functionality Pending Implementation

## server



# Build Instructions

Prior to cloning the project files and installing dependencies the project requires the following installations:
### Install PostgresSQL Database 
- Install PostgresSQL database and create new database "dsmp"
- Setup database password

1. Clone the project file: https://github.com/clopez13/DSMP.git
2. If user does not have nodejs previously installed use the following link to install the best suited version : https://nodejs.org/en/download
(User can install nodejs in project directory in order to avoid installing it globally. )
3. Inside of the client folder install the following dependencies:
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

