import { User } from '../models';

interface AppError extends Error {
  status?: number;
}

async function getAllUsers() {
    return User.findAll({ order: [['id', 'ASC']] });
  }

async function getUserById(id: string | number) {
    const user = await User.findByPk(id);

    if (!user) {
      const error = new Error('Usuario no encontrado') as AppError;
      error.status = 404;
      throw error;
    }

    return user;
  }

export {
    getAllUsers,
    getUserById
}
