import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt';

interface AppError extends Error {
  status?: number;
}

function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const error = new Error('Token de autenticacion requerido') as AppError;
    error.status = 401;
    return next(error);
  }

  const token = authHeader.slice('Bearer '.length);

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    const authError = error as AppError;
    authError.status = 401;
    authError.message = 'Token invalido o expirado';
    next(authError);
  }
}

export default authMiddleware;
