import express , {Router } from 'express';
import PersonController from '../controllers/PersonController.ts';
const router: Router = express.Router()

router
    .get('/usuarios', PersonController.getUsers)

export default router