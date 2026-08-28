import db from "../database/database.js";

export function getAllEnterprise() {
  return db
    .prepare(
      `
    SELECT enterprise.*,
    COUNT(games.id) AS total_games
    FROM enterprise
    LEFT JOIN games
    ON enterprise.id = games.enterprise_id
    GROUP BY enterprise.id
    `,
    )
    .all();
}

export function existEnterprise(id) {
  return db.prepare(`SELECT * FROM enterprise where id = ?`).get(id);
}

export function editEnterpriseQuery(enterprise) {
  console.log("enterprise", enterprise);
  db.prepare(
    `
    UPDATE enterprise
    SET name = ?,
        yearOfFundation = ?
        WHERE id = ?
  `,
  ).run(
    enterprise.name,
    Number(enterprise.yearOfFundation),
    Number(enterprise.id),
  );
  return db
    .prepare(
      `
    SELECT * FROM enterprise
    WHERE id = ?
    `,
    )
    .run(Number(enterprise.id));
}

export function insertEnterprise(enterprise) {
  const result = db
    .prepare(
      `
    INSERT INTO enterprise (
      name,yearOfFundation,url
    )
      VALUES (?,?,?)
  `,
    )
    .run(enterprise.name, Number(enterprise.yearOfFundation), enterprise.url);

  return db
    .prepare(
      `
    SELECT * FROM enterprise
    WHERE id = ?
    `,
    )
    .get(result.lastInsertRowid);
}

export function deleteEnterpriseQuery(id) {
  return db
    .prepare(
      `
    DELETE FROM enterprise
    WHERE id = ?
    `,
    )
    .run(id);
}
