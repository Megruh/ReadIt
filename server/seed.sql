DROP SCHEMA public CASCADE; 
CREATE SCHEMA public; 

CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY,
  "username" VARCHAR(50) NOT NULL,
  "password" VARCHAR(1000) NOT NULL
);

CREATE TABLE "library" (
  "book_id" SERIAL PRIMARY KEY,
  "google_books_id" VARCHAR(200) NOT NULL,
  -- wishlist, current, finished
  "shelf_id"  VARCHAR(100) NOT NULL,
  "user_id" INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);