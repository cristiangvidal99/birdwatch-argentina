import express from 'express';
import * as AuthController from '../controllers/AuthController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/register', AuthController.register.bind(AuthController));
router.post('/login', AuthController.login.bind(AuthController));
router.get('/me', authMiddleware, AuthController.me.bind(AuthController));

export default router;
