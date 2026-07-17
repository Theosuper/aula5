import db from "../database.js";

db.exec(`
    ALTER TABLE games
    ADD COLUMN enterprise_id INTEGER;
    `);

console.log("migration completa");
