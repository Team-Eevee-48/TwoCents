CREATE TABLE users (
  _id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  user_img VARCHAR(255),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sessions (
  _id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users (_id),
  session_token VARCHAR(500) NOT NULL UNIQUE
);

CREATE TABLE feedback (
  _id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users (_id),
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  votes INT NOT NULL,
  tags JSON,
  total_comments VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL
);

CREATE TABLE votes (
  _id SERIAL PRIMARY KEY NOT NULL,
  feedback_id INT REFERENCES feedback (_id),
  user_id INT REFERENCES users (_id)
);

CREATE TABLE comments (
  _id SERIAL PRIMARY KEY NOT NULL,
  feedback_id INT REFERENCES feedback (_id),
  user_id INT REFERENCES users (_id),
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);