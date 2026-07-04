import db from "../database/database.js";

export function registerUser(user) {
  const result = db
    .prepare(
      `
        INSERT INTO users (
        name,email,password
        )
        VALUES(?,?,?)
        `,
    )
    .run(user.name, user.email, user.password);
  return db
    .prepare(
      `
        SELECT id,name,email,
        FROM USERS
        WHERE id = ?
        `,
    )
    .get(result.lastInsertRowid);
}

export function getUserByEmail(email) {
  return db
    .prepare(
      `
        SELECT * FROM users
        WHERE email = ?
        `,
    )
    .get(email);
}
