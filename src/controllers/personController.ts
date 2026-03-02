import { Request, Response } from "express";
import Person from '../models/person.ts'

class PersonController {
    static async getUsers(req: Request, res: Response){
        const users = await Person.find()
        return res.status(200).send({ response: users })
    }
    static async registerUser(req: Request, res: Response){
        const {name, lastname, age} = req.body
        new Person({name, lastname, age})
        res.status(200).send({ response: `Usuário ${name} cadastrado com sucesso` })
    }
}

export default PersonController