import db from "../database/database.js";

export function getAllGames() {
  return db.prepare(`SELECT * FROM games`).all();
}

export function insertGame(game) {
  const result = db
    .prepare(
      `
    INSERT INTO games (
      name,year,sells,protagonist
    )
      VALUES (?,?,?,?)
  `,
    )
    .run(game.name, Number(game.year), Number(game.sells), game.protagonist);

  return db
    .prepare(
      `
    SELECT * FROM games
    WHERE id = ?
    `,
    )
    .get(result.lastInsertRowid);
}

export function deleteGameQuery(id) {
  return db
    .prepare(
      `
    DELETE FROM games
    WHERE id = ?
    `,
    )
    .run(id);
}
