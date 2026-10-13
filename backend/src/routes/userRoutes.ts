import express from 'express';
import * as UserController from '../controllers/UserController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/', UserController.list.bind(UserController));
router.get('/:id', UserController.getById.bind(UserController));

export default router;
