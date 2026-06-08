import { Request, Response } from "express";
import { registerUserDto, updateUserDto } from "../dtos/userDTO";
import { registerUser } from "../services/user.service";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
            await registerUser(data)
            return res.status(200).send({ response: "Usuário registrado com sucesso!"})
        }
        catch(error){
            console.error(error)
        
            return res.status(500).json({ // resposta para ver o erro completo da api(ajudou a solucionar o erro de PrismaClientInitialization)
                message: error instanceof Error
                    ? error.message
                    : error
            })
        }
    }

    static async show(req: Request, res: Response){
        try{
        }
        catch(e){
        }
    }

    static async update(req: Request, res: Response){
        const {id} = req.params
        const data: updateUserDto = req.body
        try{
        }
        catch(e){
        }
    }

    static async delete(req: Request, res: Response){
        const {id} = req.params
        try{
        }
        catch(e){
        }
    }
}
