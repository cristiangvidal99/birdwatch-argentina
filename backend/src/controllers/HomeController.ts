import { Request, Response } from 'express';

function index(req: Request, res: Response): void {
    res.render('index', { title: 'Express' });
}

export {
    index
};