import db from "../database/database.js";

export function getAllGames() {
  return db.prepare(`SELECT * FROM games`).all();
}
