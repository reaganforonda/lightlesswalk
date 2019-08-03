DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(45),
    email VARCHAR(80),
    password VARCHAR(100)
);