import { Pool } from "pg";
const config = {
  user: "postgres",
  host: "localhost",
  password: "sebastian123",
  database: "typescript",
};
export const pool = new Pool(config);
