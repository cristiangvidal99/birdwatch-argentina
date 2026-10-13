import bcrypt from 'bcryptjs';
import { User } from '../models';
import type { UserAttributes } from '../models/User';
import { signToken } from '../utils/jwt';

interface Credentials {
    name?: string;
    email?: string;
    password?: string;
}

interface AppError extends Error {
    status?: number;
}

async function register({ name, email, password }: Credentials) {
    if (!name || !email || !password) {
        const error = new Error('name, email y password son obligatorios') as AppError;
        error.status = 400;
        throw error;
    }

    if (password.length < 6) {
        const error = new Error('La contrasena debe tener al menos 6 caracteres') as AppError;
        error.status = 400;
        throw error;
    }

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
        const error = new Error('El email ya esta registrado') as AppError;
        error.status = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    const token = generateToken(user);

    return { user, token };
}

async function login({ email, password }: Credentials) {
    if (!email || !password) {
        const error = new Error('email y password son obligatorios') as AppError;
        error.status = 400;
        throw error;
    }

    const user = await User.scope('withPassword').findOne({ where: { email } });

    if (!user) {
        const error = new Error('Credenciales invalidas') as AppError;
        error.status = 401;
        throw error;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        const error = new Error('Credenciales invalidas') as AppError;
        error.status = 401;
        throw error;
    }

    const token = generateToken(user);

    return { user: user.toJSON(), token };
}

function generateToken(user: UserAttributes) {
    return signToken({
        userId: user.id,
        email: user.email,
    });
}


export {
    register,
    login,
    generateToken
}
