import { Request, Response } from 'express';

function index(req: Request, res: Response): void {
    res.json({ message: 'Bienvenido a la API de Birdwatch Argentina' });
}

export {
    index
};