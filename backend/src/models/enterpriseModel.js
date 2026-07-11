import db from "../database/database.js";

export function getAllenterprises() {
  return db.prepare(`SELECT * FROM enterprises`).all();
}
export function editenterpriseQuery(enterprise) {
  db.prepare(
    `
    UPDATE enterprises
    SET name = ?,
        year of fundation =?,
  `,
  ).run(enterprise.name, Number(enterprise.yearOfFundation));
  return db
    .prepare(
      `
    SELECT * FROM enterprises
    WHERE id = ?
    `,
    )
    .run(Number(enterprise.id));
}

export function insertenterprise(enterprise) {
  const result = db
    .prepare(
      `
    INSERT INTO enterprises (
      name,year of fundation
    )
      VALUES (?,?,?,?)
  `,
    )
    .run(enterprise.name, Number(enterprise.yearOfFundation));

  return db
    .prepare(
      `
    SELECT * FROM enterprises
    WHERE id = ?
    `,
    )
    .get(result.lastInsertRowid);
}

export function deleteenterpriseQuery(id) {
  return db
    .prepare(
      `
    DELETE FROM enterprises
    WHERE id = ?
    `,
    )
    .run(id);
}
