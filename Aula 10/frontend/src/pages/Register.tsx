import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

export const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () => {
        try{
            await axios.post('http://localhost:8080/api/auth/register', { name, email, password })

            return Swal.fire({
                title: "Sucesso!",
                text: "Usuário registrado com sucesso!",
                icon: "success"
              });
        }
        catch{
            Swal.fire({
                title: "Erro!",
                text: "Não foi possível registrar o usuário",
                icon: "error"
              });
        }
        setName("")
        setEmail("")
        setPassword("")
        // e.preventDefault()
    }

    return(
        <>
        <div className="h-screen w-screen flex items-center justify-center bg-blue-200">
            <div className="w-2/6 h-72 shadow-md bg-white rounded-2xl">
                <div className="flex flex-col items-center justify-center h-full">
                    <h3>Register</h3>
                    <input value={name} onChange={(e) => setName(e.target.value)} className=" m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Nome..."/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email..."/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Senha..."/>
                    <button onClick={handleRegister} className="m-3 w-20 h-20 rounded-sm bg-emerald-500">Registrar</button>
                </div>
            </div>
        </div>
        </>
    )
}