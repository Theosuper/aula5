import db from "..//database.js";

db.exec(`
    ALTER TABLE enterprise
    ADD COLUMN url VARCHAR(255);
    `);

console.log("migration completa");
