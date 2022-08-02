import NavBar from "../components/navbar/navbar"

import Link from 'next/link'
import { FormEvent, useState } from "react";
import { app} from '../../services/firebase';

import Login from "../../services/login";


export default function LoginPage() {
    app;
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    function LoginFunction(event: FormEvent) {

        event.preventDefault()
        Login(email, password)
        
    }

    return (
        <main >
            <NavBar />
            <div >
                <div >
                    <h1>The best journal</h1>
                </div>
                <div>
                    
                        <form onSubmit={LoginFunction}>
                            <div>
                            <h1>Login</h1>
                            </div>
                            <input type='text'  value={email} onChange={event => setEmail(event.target.value)} placeholder='Email' required></input>
                            <input type='password'  value={password} onChange={event => setPassword(event.target.value)} placeholder='Password' required></input>
                            <button type='submit' >Login</button>
                            
                            <div>
                                <Link href='/new-account'><a>Create new account</a></Link>
                            </div>
                        </form>
                    
                </div>
            </div>
            
        </main>
        
    )
}