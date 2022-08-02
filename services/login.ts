import { getAuth, getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import Router from "next/router";
import { app } from "./firebase";


function Login(email: string, password: string) {


    const auth = getAuth(app);
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            getIdToken(user).then(data=> {
                Router.push({pathname: '/', query: {token: data}})
            })
            
           
           
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert(errorCode)

        });
}

export default Login