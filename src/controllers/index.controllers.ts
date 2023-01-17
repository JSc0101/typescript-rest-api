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

const findUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id: number = parseInt(req.params.id);
    const response: QueryResult = await pool.query(
      `SELECT * FROM users WHERE id = $1`,
      [id]
    );
    const { rows } = response;

    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server errror !" });
  }
};

const saveUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    type user = { name: string; email: string };
    const { name, email }: user = req.body;
    const consult: string = `INSERT INTO users(name,email) VALUES($1,$2)`;
    const response: QueryResult = await pool.query(consult, [name, email]);
    console.log(response);
    return res.json({
      save: "User save succesfully",
      body: {
        user: {
          name,
          email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error save user !" });
  }
};
export { initialApp, getUsers, findUserById, saveUser };
