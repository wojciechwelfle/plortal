```
    ____  _            _        _ 
   |  _ \| | ___  _ __| |_ __ _| |
   | |_) | |/ _ \| '__| __/ _` | |
   |  __/| | (_) | |  | || (_| | |
   |_|   |_|\___/|_|   \__\__,_|_|


```

[<ins>English</ins>](README.md) - [Polish](README.pl.md)

* [O Projekcie](#o-projekcie)
* [Początkowe założenia aplikacji](#początkowe-założenia-aplikacji)
* [Wymagane aplikacje/narzędzia](#wymagane-aplikacjenarzędzia)
* [Jak uruchomić - backend](#jak-uruchomić---backend)
* [Jak uruchomić - frontend](#jak-uruchomić---frontend)
    
![image](https://github.com/wojciechwelfle/plortal/assets/167070778/80beb792-75b9-4061-9342-ce26d4442a0b)


## O projekcie
Projekt tworzony przez użytkowników:

*Wojciech Welfle(https://github.com/wojciechwelfle)

*Martyna Szymańska(https://github.com/MartynaSzymanskaGitHub)

*Szymon Muszyński(https://github.com/szymon-muszynski)

*Wojciech Łepkowski(https://github.com/WOJTASK1)

Głownym założeniem projektu jest umożliwienie użytkownikom organizacji ich wolnego czasu na Politechnice Łódzkiej.
Kod dla aplikacji PLORTAL jest rozdzielony na foldery: [back-end](https://github.com/wojciechwelfle/plortal/tree/main/backend/plortal) i [front-end](https://github.com/wojciechwelfle/plortal/tree/main/frontend) . 


## Początkowe założenia aplikacji
- jest to mały projekt, który ma na celu zbudowanie aplikacji webowej na przedmiot zwany "Podstawy Inżynierii Oprogramowania" (PIO),
- zbudowanie aplikacji, która umożliwia podstawowe operacje jak:
  stwórz użytkownika, logowanie do strony głównej, znajdywanie najbliższej restauracji oraz znajdywanie budynków na kampusie Politechniki Łódzkiej,
- jest to projekt, w którym wspólnie popracujemy i uczymy się od siebie nawzajem, poszerzać umiejętności lub
  też je utrwalać.


## Wymagane aplikacje/narzędzia
Do uruchomienia aplikacji wymagana jest instalacja następujących narzędzi:
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) / [VSC](https://code.visualstudio.com/) 
- [Java 17 LTS](https://openjdk.org/projects/jdk/17/)
- [MySql Workbench](https://www.mysql.com/products/workbench/)
- [MySql Server](https://dev.mysql.com/downloads/mysql/) 


## Jak uruchomić - backend

### 1. Klonowanie repozytorium
Należy sklonować repozytorium backend i frontend przez https lub ssh
```
git clone https://github.com/wojciechwelfle/plortal.git
```

### 2. Pobierz i skonfiguruj MySQL Server oraz MySQL Workbench
- [MySql Workbench](https://www.mysql.com/products/workbench/)
- [MySql Server](https://dev.mysql.com/downloads/mysql/)

Dodaj serwer do MySQL Workbench:

1. Otwórz MySQL Workbench.
2. Kliknij ikonę '+' aby dodać nowy serwer.
3. Postępuj zgodnie z instrukcjami, aby skonfigurować połączenie z serwerem.

![image](https://github.com/wojciechwelfle/plortal/assets/111795716/733a3e3a-9e85-4845-8835-5fd4390e7b00)

Copy and execute the following query in MySQL Workbench:
```
CREATE DATABASE IF NOT EXISTS newdb;
USE newdb;
```
![image](https://github.com/wojciechwelfle/plortal/assets/111795716/8e55bb28-2be4-4a76-a1c9-670adcefddc9)

### 3. Skonfiguruj bazę danych

Otwórz folder plortal/backend/plortal w IntelliJ IDEA.

Przejdź do backend/plortal/src/main/resources/ i zmodyfikuj plik application.properties:
```
spring.datasource.url=jdbc:mysql://localhost:3306/{name db}    #default newdb
spring.datasource.username={username}                          #default root
spring.datasource.password={password}                          #default Wojtek12345#
```

### 4. Uruchom projekt
Teraz możesz uruchomić projekt w IntelliJ IDEA:

1. Otwórz plik PlortalApplication.
2. Uruchom PlortalApplication.
   
Twój serwer powinien teraz działać.

---
## Jak uruchomić - frontend

### 1. Zainstaluj i skonfiguruj NODE JS

[Node.js](https://nodejs.org/en/download)

### 2. Uruchom projekt (frontend)
```
cd frontend
```
```
npm install --force
```
```
nmp start
```
Teraz możesz przejść do http://localhost:3000 w twojej przeglądarce.

### Development
- [Java 17 LTS](https://openjdk.org/projects/jdk/17/)
- [MySql](https://www.mysql.com/)
