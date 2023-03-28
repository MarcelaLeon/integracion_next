import type { NextApiRequest, NextApiResponse } from 'next'
import { students } from './db';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const newStudent = JSON.parse(req.body)
    if (req.method === 'POST') {
        students.push(newStudent)
    }
    res.status(200).json(newStudent)
}