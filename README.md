```
    ____  _            _        _ 
   |  _ \| | ___  _ __| |_ __ _| |
   | |_) | |/ _ \| '__| __/ _` | |
   |  __/| | (_) | |  | || (_| | |
   |_|   |_|\___/|_|   \__\__,_|_|

```

[<ins>English</ins>](README.md) - [Polish](README.pl.md)

* [About project](#about-project)
* [Initial assumptions of the application](#initial-assumptions-of-the-application)
* [Prerequisites](#prerequisites)
* [How to run - backend](#how-to-run---backend)
* [How to run - frontend](#how-to-run---frontend)

   ![image](https://github.com/wojciechwelfle/plortal/assets/167070778/80beb792-75b9-4061-9342-ce26d4442a0b)


## About project
This project is created by:

*Wojciech Welfle(https://github.com/wojciechwelfle)
 
*Martyna Szymańska(https://github.com/MartynaSzymanskaGitHub)

*Szymon Muszyński(https://github.com/szymon-muszynski)

*Wojciech Łepkowski(https://github.com/WOJTASK1)

The main aim for this project is to allow user organise their free time on Politechnika Łódzka.
The code for the PLORTAL app is separated for [back-end](https://github.com/wojciechwelfle/plortal/tree/main/backend/plortal) and [front-end](https://github.com/wojciechwelfle/plortal/tree/main/frontend) folder. 


## Initial assumptions of the application
- this is a small project in order to build an app for a school project named "PIO".
- the base of the application is able to execute the most basic actions such as:
 create user, login to the main page, search for the closest restaurant and find building on Politechnika Łódzka campus, 
- in this project we work together, learn from each other and enlarge our skills
  or even develop them. 

## Prerequisites
The following tools are required to start the application:
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) / [VSC](https://code.visualstudio.com/) 
- [Java 17 LTS](https://openjdk.org/projects/jdk/17/)
- [MySql Workbench](https://www.mysql.com/products/workbench/)
- [MySql Server](https://dev.mysql.com/downloads/mysql/)


## How to run - backend

### 1. Clone the repository
Please clone the repository by https or ssh (below we use the https method).
```
git clone https://github.com/wojciechwelfle/plortal.git
```

### 2. Download and configure MySql Server and MySql Workbench
- [MySql Workbench](https://www.mysql.com/products/workbench/)
- [MySql Server](https://dev.mysql.com/downloads/mysql/)

Add the server to MySQL Workbench:

1. Open MySQL Workbench.
2. Click the '+' icon to add a new server.
3. Follow the prompts to configure your server connection.
   
![image](https://github.com/wojciechwelfle/plortal/assets/111795716/733a3e3a-9e85-4845-8835-5fd4390e7b00)

Copy and execute the following query in MySQL Workbench:
```
CREATE DATABASE IF NOT EXISTS newdb;
USE newdb;
```
![image](https://github.com/wojciechwelfle/plortal/assets/111795716/8e55bb28-2be4-4a76-a1c9-670adcefddc9)


### 3. Setup the Database

Open the plortal/backend/plortal folder in IntelliJ IDEA.

Navigate to backend/plortal/src/main/resources/ and modify application.properties:
```
spring.datasource.url=jdbc:mysql://localhost:3306/{name db}    #default newdb
spring.datasource.username={username}                          #default root
spring.datasource.password={password}                          #default Wojtek12345#
```

### 4. Run the project

You can now run the project using IntelliJ IDEA:

1. Open the PlortalApplication file.
2. Run PlortalApplication.
   
Your server should now be up and running.

---
## How to run - frontend

### 1. Install and configure Node js

[Node.js](https://nodejs.org/en/download)

### 2. Run the project (frontend)
```
cd frontend
```
```
npm install --force
```
```
nmp start
```
Now you can navigate to http://localhost:3000 in your browser.

### Development
- [Java 17 LTS](https://openjdk.org/projects/jdk/17/)
- [MySql](https://www.mysql.com/)

