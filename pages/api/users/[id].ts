import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      
      break
    default:
      res.status(401).json({ message: 'method tidak boleh digunakan' })
      break
  }
}
