import { Request, Response } from "express";
import Person from '../models/person.ts'

class PersonController {
    static async getUsers(req: Request, res: Response){
        const users = await Person.find()
        return res.status(200).send({ response: users })
    }
}

export default PersonController