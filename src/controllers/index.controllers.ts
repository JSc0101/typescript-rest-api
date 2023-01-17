import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../db";

const initialApp = (req: Request, res: Response) => {
  res.send("hello world");
};

const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const consult: string = `SELECT * FROM users`;
    const response: QueryResult = await pool.query(consult);
    const { rows } = response;
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error !" });
  }
};

export { initialApp, getUsers };
