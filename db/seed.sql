Create table houses(
id serial primary key,
name varchar(100),
address varchar(100),
city varchar(50),
state varchar(5),
zip_code integer 
)

insert into houses (name, address, city, state, zip_code)
values (
'brickellioides','64001 Ryan Point','Pasadena','CA','91109'),
('californica','599 Towne Street','New York City','NY','10160'),
('Isoetes','1 Birchwood Pl.','Dayton','OH','45414'),
('Galium', '9 Duke Center','Boulder','CO','80328'),
('Abutilon','17 Norway Maple Ct','Charlotte','NC','28230')