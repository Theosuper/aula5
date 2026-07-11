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

db.exec(`
    CREATE TABLE IF NOT EXISTS games(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    year INTEGER NOT NULL,
    sells INTEGER NOT NULL,
    protagonist TEXT NOT NULL
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS enterprise(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    yearOfFundation INTEGER NOT NULL
    )
`);

export default db;
