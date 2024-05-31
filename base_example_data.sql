
-- utworzenie konta administratora
insert into users(email,password,role) values('admin@wp.pl','Testowy12!',0);
-- utworzenie konta studenta
insert into users(email,password,role) values('uczen@wp.pl','Testowy12!',1);
-- utworzenie konta nauczyciela
insert into users(email,password,role) values('nauczyciel@wp.pl','Testowy12!',2);

-- dodanie przykladowych newsow
insert into news(description,modification_date,photo_url,title) values ('Na zakończonych w Białymstoku (26.05) Akademickich Mistrzostwach Polski w lekkiej atletyce, studenci Politechniki Łódzkiej zdobyli 10 medali w tym 2 w klasyfikacji generalnej.','2024-10-08 12:34:56.789000','https://p.lodz.pl/sites/default/files/styles/article_main/public/2024-05/img_20240526_161359.jpg?h=f283f258&itok=2hC5LQ0X','Studenci PŁ z medalami na AMP w lekkiej atletyce');
insert into news(description,modification_date,photo_url,title) values ('Z konkursu Albi Eco Race we Francji, studenci Politechniki Łódzkiej wrócili ze srebrnym pucharem. - W slalomie nasz kierowca pokazał swoje umiejętności, wykorzystując bolid do granic możliwości. Po zakończeniu ostatniej konkurencji z radością ogłaszamy, że zdobyliśmy srebrny puchar','2024-05-10 12:30:55.709000','https://p.lodz.pl/sites/default/files/2024-05/iron_warriors_na_podium.jpg','Studenci PŁ z Iron Warriors ponownie na podium');

-- dodanie przykladowych lokalizacji
TRUNCATE TABLE Locations;

INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Budynek A10', 51.752565, 19.453160, 'UNIVERSITY_BUILDING');
INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Budynek B19', 51.746989, 19.455890, 'UNIVERSITY_BUILDING');
INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Budynek B22', 51.745637, 19.454076, 'UNIVERSITY_BUILDING');
INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Budynek B28', 51.746316, 19.451636, 'UNIVERSITY_BUILDING');
INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Budynek C3', 51.745223, 19.449962, 'UNIVERSITY_BUILDING');

INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Park Poniatowskiego', 51.753775, 19.441982, 'PARK');
INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Park im. ks. Michała Klepacza', 51.748375, 19.453051, 'PARK');
INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Park Źródliska', 51.758300, 19.477713, 'PARK');

INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Restauracja "A-Dong"', 51.748095, 19.449893, 'RESTAURANT');
INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Restauracja ''McDonald''s''', 51.757506, 19.450257, 'RESTAURANT');

INSERT INTO Locations (name, latitude, longitude, location_type) VALUES ('Restauracja ''Fabryka Śniadań''', 51.739656, 19.466108, 'RESTAURANT');