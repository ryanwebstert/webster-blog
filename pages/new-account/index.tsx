import Link from 'next/link'

import NavBar from '../components/navbar/navbar'
import { FormEvent, useState } from 'react';
import { app } from '../../services/firebase'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


export default function RegisterPage() {
    app;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    

    function Register(event: FormEvent) {
        event.preventDefault()

        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        window.alert('Criado com sucesso')
        const user = userCredential.user;
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorCode)
    });

    }

    return (
        <main >
            
            <div >
                <div>
                    <h1>The best journal</h1>
                </div>
                <div>
                    
                        <form onSubmit={Register}>
                            <div>
                            <h1>Register</h1>
                            </div>
                            <input type='text'  value={email} onChange={event => setEmail(event.target.value)} placeholder='Email' required></input>
                            <input type='password'  value={password} onChange={event => setPassword(event.target.value)} placeholder='Password' required></input>
                            <button type='submit' >Register</button>
                            <div>
                                <Link href='/login'><a>Login</a></Link>
                            </div>
                        </form>
                    
                </div>
            </div>
            
        </main>
    )
}