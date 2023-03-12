import { NextApiRequest, NextApiResponse } from 'next'
import { getUsers as getUsersModel } from '@/lib/prisma/users'

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { users, error } = await getUsersModel()
    if (error) throw new Error(error)
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export default getUsers
