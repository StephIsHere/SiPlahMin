import express from 'express';
import userController from '../controllers/user-controller.js';

const router = express.Router();

router.get('/get_user', userController.getUser);

export default router;