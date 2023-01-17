import { Request, Response } from "express";

const initialApp = (req: Request, res: Response) => {
  res.send("hello world");
};

const getUsers = (req: Request, res: Response) => {
  res.send("Get users!");
};

export { initialApp, getUsers };
