import type { NextApiRequest, NextApiResponse } from 'next'
import { students } from './db';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(students)
}