import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import db from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

type CreateUserInputType = {
  address: string;
  city: string;
  postCode: string;
  password: string;
};

export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session || session.user.role !== "admin") {
    res.status(401).json({ message: "tidak ada izin akses" });
    return;
  }

  try {
    const users = await db.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { address, city, postCode, password } = req.body as CreateUserInputType;
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "tidak ada izin akses" });
    return;
  }

  if (!password || !address || !city || !postCode) {
    res.status(400).json({ message: "Semua harus diisi" });
    return;
  }

  const secretSalt = Number(process.env.BCRYPT_SALT_SECRET);
  const salt = await bcrypt.genSalt(secretSalt);
  const hash = await bcrypt.hash(password, salt);

  const splitName = session.user.name!.split(" ");
  const firstname = splitName[0];
  const lastname = splitName[splitName.length - 1];

  try {
    const user = await db.user.update({
      where: { email: session.user.email! },
      data: {
        password: hash,
        userProfile: {
          create: { firstname, lastname, address, city, postCode },
        },
      },
    });

    res.status(201).json(user);
    return;
  } catch (error) {
    res.status(500).json(error);
    return;
  }
};
