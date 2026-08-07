import db from "../database/database.js";

export function getAllGames() {
  return db
    .prepare(
      `
    SELECT games. *,enterprise.name as enterprise_name
    FROM games
    LEFT JOIN enterprise
    ON games.enterprise_id = enterprise.id
    `,
    )
    .all();
}
export function editGameQuery(game) {
  db.prepare(
    `
    UPDATE games
    SET name = ?,
        year=?,
        sells=?,
        protagonist=?,
        enterprise_id=?
        WHERE id = ?
  `,
  ).run(
    game.name,
    Number(game.year),
    Number(game.sells),
    game.protagonist,
    Number(game.enterpriseId),
    Number(game.id),
  );
  return db
    .prepare(
      `
    SELECT * FROM games
    WHERE id = ?
    `,
    )
    .run(Number(game.id));
}

export function insertGame(game) {
  const result = db
    .prepare(
      `
    INSERT INTO games (
      name,year,sells,protagonist,enterprise_id
    )
      VALUES (?,?,?,?,?)
  `,
    )
    .run(
      game.name,
      Number(game.year),
      Number(game.sells),
      game.protagonist,
      game.enterpriseId,
    );

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
