```
    ____  _            _        _ 
   |  _ \| | ___  _ __| |_ __ _| |
   | |_) | |/ _ \| '__| __/ _` | |
   |  __/| | (_) | |  | || (_| | |
   |_|   |_|\___/|_|   \__\__,_|_|

```

[<ins>English</ins>](README.md) - [Polish](README.pl.md)

* [O Projekcie](#o-projekcie)
* [Początkowe założenia aplikacji](#pocztkowe-zaoenia-aplikacji)
* [Wymagane aplikacje/narzędzia](#wymagane-aplikacje-narzedzia)
* [Jak zacząć](#jak-zaczacz)
    
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


## Jak uruchomić program

### 1. Klonowanie repozytorium
Należy sklonować repozytorium backend i frontend przez https lub ssh
```
git clone https://github.com/wojciechwelfle/plortal.git
```

### 2. Uruchomić serwer MySQL
Do uruchomienia tej aplikacji potrzebny jest działający serwer mysql.
Możesz użyć lokalnej instalacji serwera z tego projektu.

**Pamiętaj:** jeśli używasz instancji serwera lokalnego, zmień parametry połączenia z bazą danych.
Poczekaj, aż serwer bazy danych uruchomi się całkowicie, może to chwilę potrwać.

Przejdź do katalogu backend/plortal/src/main/resources/
i zmodyfikuj application.properties
```
spring.datasource.url=jdbc:mysql://localhost:3306/{name db}
spring.datasource.username={username}    #domyślnie root
spring.datasource.password={password   } #domyślnie Wojtek12345#
```

### 3. Zainstaluj i skonfiguruj NODE JS

[NODE JS](https://nodejs.org/en/download)

### 4. Zainstaluj i uruchom the nmp używająć IntelliJ IDEA lub VSC
```
cd frontend
```
```
npm install --force
```
```
nmp start
```
### 5. Uruchom projekt

Następnie, uruchom aplikacje używająć IntelliJ IDEA:

Run PlortalApplication

Teraz możesz przejść do http://localhost:3000 w twojej przeglądarce.

### Development
- [Java 17 LTS](https://openjdk.org/projects/jdk/17/)
- [MySql](https://www.mysql.com/)
