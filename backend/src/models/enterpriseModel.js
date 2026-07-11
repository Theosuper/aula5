import db from "../database/database.js";

export function getAllEnterprise() {
  return db.prepare(`SELECT * FROM enterprise`).all();
}
export function editEnterpriseQuery(enterprise) {
  db.prepare(
    `
    UPDATE enterprise
    SET name = ?,
        year of fundation =?,
  `,
  ).run(enterprise.name, Number(enterprise.yearOfFundation));
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
      name,yearOfFundation
    )
      VALUES (?,?)
  `,
    )
    .run(enterprise.name, Number(enterprise.yearOfFundation));

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
