import { NextFunction, Request, Response } from 'express';
import * as AuthService from '../services/AuthService';
import * as UserService from '../services/UserService';

async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await AuthService.register(req.body);
        res.status(201).json({ data: result });
    } catch (error) {
        next(error);
    }
}

async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await AuthService.login(req.body);
        res.json({ data: result });
    } catch (error) {
        next(error);
    }
}

async function me(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const user = await UserService.getUserById(req.user.userId);
        res.json({ data: user });
    } catch (error) {
        next(error);
    }
}

export {
    register,
    login,
    me
};
