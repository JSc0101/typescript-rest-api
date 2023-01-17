import { Pool } from "pg";
const config = {
  user: "postgres",
  host: "localhost",
  password: "sebastian123",
  database: "typescript",
};
const pool = new Pool(config);

export { pool };
