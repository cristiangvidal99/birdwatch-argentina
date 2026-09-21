import { NextFunction, Request, Response } from 'express';
import * as UserService from '../services/UserService';

async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const users = await UserService.getAllUsers();
        res.json({ data: users });
    } catch (error) {
        next(error);
    }
}

async function getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const user = await UserService.getUserById(id ?? '');
        res.json({ data: user });
    } catch (error) {
        next(error);
    }
}

export {
    list,
    getById
}
