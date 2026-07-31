import db from "../database/database.js";

export function getAllEnterprise() {
  return db.prepare(`SELECT * FROM enterprise`).all();
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
