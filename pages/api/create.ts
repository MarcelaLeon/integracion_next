import type { NextApiRequest, NextApiResponse } from 'next'
import { students } from './db';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    /* const newStudent = JSON.parse(req.body)
    if (req.method === 'POST') {
        students.push(newStudent)
    }
    res.status(200).json(newStudent) */

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { nombre, calificaciones, curso } = req.body;

    if (!nombre || !calificaciones || !curso) {
        return res.status(400).json({ message: 'Bad request' })
    }

    const newStudent = {
        id: (students.length + 1).toString(),
        nombre: nombre,
        curso: curso,
        calificaciones: {
            PrimerCuatr: calificaciones.PrimerCuatr,
            SegundoCuatr: calificaciones.SegundoCuatr
        }
    }

    students.push(newStudent);
    res.status(200).json(newStudent);
}