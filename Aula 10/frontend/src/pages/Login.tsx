import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try{
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password })
            
            sessionStorage.setItem('token', response.data.token)

            Swal.fire({
                title: "Sucesso!",
                text: "Login efetuado com sucesso!",
                icon: "success"
            });

            return navigate('/home')
        }
        catch{
            Swal.fire({
                title: "Erro!",
                text: "Erro ao efetuar login",
                icon: "error"
              });
        }
        setEmail("")
        setPassword("")
    }

    return(
        <>
        <div className="h-screen w-screen flex items-center justify-center bg-blue-200">
            <div className="w-2/6 h-72 shadow-md bg-white rounded-2xl">
                <div className="flex flex-col items-center justify-center h-full">
                    <h3>Login</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Email..."/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="m-3 w-4/6 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Senha..."/>
                    <button onClick={handleLogin} className="m-3 w-20 h-10 rounded-sm bg-emerald-500">Registrar</button>
                </div>
            </div>
        </div>
        </>
    )
}