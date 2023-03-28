import type { NextApiRequest, NextApiResponse } from 'next'
import { students } from './db';

interface student {
    id: string,
    nombre: string,
    curso: string,
    calificaciones: {
        PrimerCuatr: string,
        SegundoCuatr: string,
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const newStudents: student[] = [];

    students.map((student) => {
        if (Number(student.calificaciones.PrimerCuatr) < 6 || Number(student.calificaciones.SegundoCuatr) < 6) {
            newStudents.push(student);
        }
    })

    res.status(200).json(newStudents);
}