import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers, createUser } from '@/controllers/user-controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res)
      break;
    case "POST":
      createUser(req, res)
      break;
    default:
      res.status(200).json({ message: "not allowed method" });
      break;
  }
}
