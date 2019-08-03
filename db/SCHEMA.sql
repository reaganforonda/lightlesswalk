DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS friends;
DROP TABLE IF EXISTS users;


CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(45),
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    email VARCHAR(80),
    password VARCHAR(100)
);

CREATE TABLE friends
(
    user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE groups
(
    group_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id)
);