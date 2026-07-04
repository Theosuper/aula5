import Database from "better-sqlite3";

const db = new Database("./data/games.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
    )
`);
export default db;
