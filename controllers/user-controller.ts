import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import db from "@/lib/prisma";

type CreateUserInputType = {
  name: string;
  email: string;
  password: string;
};

export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await db.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, password } = req.body as CreateUserInputType;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Tidak ada yang boleh kosong" });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const splitName = name.split(" ");
  const firstname = splitName[0];
  const lastname = splitName[splitName.length - 1];

  try {
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hash,
        userProfile: { create: { firstname, lastname } },
      },
      select: {
        name: true,
        email: true,
      },
    });

    res.status(201).json(user);
    return;
  } catch (error) {
    res.status(500).json(error);
    return;
  }
};
