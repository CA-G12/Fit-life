BEGIN;

DROP TABLE IF EXISTS players, coaches, classes, subscriptions CASCADE;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    hashpassword VARCHAR(100) NOT NULL
);

CREATE TABLE coaches (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phonenumber VARCHAR(100) NOT NULL
);

CREATE TABLE classes (
    id SERIAL PRIMARY KEY,
    coach_id INT NOT NULL UNIQUE,
    CONSTRAINT fk_coach_id FOREIGN KEY (coach_id) REFERENCES coaches(id),
    name VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL UNIQUE,
    description VARCHAR(500) NOT NULL,
    image VARCHAR(500) NOT NULL
);

CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    class_id INT NOT NULL,
    player_id INT NOT NULL,
    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES players(id),
    CONSTRAINT fk_class_id FOREIGN KEY (class_id) REFERENCES classes(id),
    creation_time DATE NOT NULL DEFAULT NOW(),
    duration INT NOT NULL,
    status INT NOT NULL DEFAULT 0
);


INSERT INTO players (name, email, hashpassword) VALUES 
('Mai', 'mai@gmail.com', '12345'),
('Salsabil', 'salsabil@gmail.com', '98765'),
('Mohammed', 'mohammed@gmail.com', '45678');

INSERT INTO coaches (name, email, phonenumber) VALUES
('Ahmed', 'ahmed@gmail.com', '14785'),
('Lina', 'lina@gmail.com', '98765'),
('Abdallh', 'abdallh@gmail.com', '45678');

INSERT INTO classes (coach_id, name, price, description, image) VALUES
(1, 'Fitness', 40.5, 'Description Content 1', 'https://images.healthshots.com/healthshots/en/uploads/2022/03/20121414/fitness-woman-770x433.jpg'),
(2, 'Fitness', 50, 'Description Content 2', 'https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU.jpg'),
(3, 'Fitness', 100, 'Description Content 3', 'https://img.etimg.com/photo/91740413/91740413.jpg?v=3');

INSERT INTO subscriptions (class_id, player_id, creation_time, duration, status) VALUES 
(2, 1, '2022-05-22', 5, 0),
(3, 2, '2022-03-10', 8, 1),
(1, 3, '2022-07-16', 10, 1);

COMMIT;