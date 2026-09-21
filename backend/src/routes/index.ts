import express from 'express';
import * as HomeController from '../controllers/HomeController';

const router = express.Router();

router.get('/', HomeController.index);

export default router;
