import express , {Router } from 'express';
import PersonController from '../controllers/personController.ts';
import { validateRegister } from '../middlewares/personMiddleware.ts';
const router: Router = express.Router()

router
    .get('/usuarios', PersonController.getUsers)
    .post('/registrar', validateRegister, PersonController.registerUser)

export default router