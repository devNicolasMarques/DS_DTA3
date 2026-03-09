import express, { Request, Response, Router } from 'express';
import Person from '../models/Person.ts'

const router: Router = express.Router();

router
    .post('/register', async (req: Request, res: Response) => {
        const { name, lastname, age } = req.body
        const person = new Person({name, lastname, age})
        await person.save()
        res.status(200).send("Registrado com sucesso!")
    })
    .get('/users', async (req: Request, res: Response) => {
        const people = await Person.find()
        res.status(200).send({ response: people })
    })
    .get('/users/:id', (req: Request, res: Response) => {
        const { id } = req.params
        let convertedId = Number(id)
      
    })
    .get('/filter', (req: Request, res: Response) => {
        const { name, lastName } = req.query
        res.status(200).send({ name: name, lastName})
    })
    .put('/update/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const { name, lastName } = req.body
        res.status(200).send({ response: `Atualizando o usuário ${id} -> ${name} ${lastName}`})
    })
    .patch('updatePatch/:id', (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome } = req.body;

        res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
    })

export default router;