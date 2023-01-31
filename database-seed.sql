CREATE TABLE coffee
(
    id SERIAL,
    name text,
    title text,
    coffe text,
    milk text,
    other text,
    
    CONSTRAINT coffes_pkey PRIMARY KEY (id)
);

INSERT INTO coffee(name, title, coffe, milk, other) VALUES
 ('Black', 'Simple black coffe','100%','',''),
 ('Latte', 'Espresso with milk','20%','80%',''),
 ('Caramel macchiato', 'Sweet caramell milky coffe','20%','75%','Sugar - 5%'),
 ('Flat white', 'Double espresso with milk','40%','60%',''),
 ('Affogato', 'Espresso with icream','20%','',''),
 ('Chocolate macchiato', 'Sweet chocolate milky coffe','20%','70%','Almond - 10%');