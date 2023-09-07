import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";


//connexion à aprtir d'une adresse email et d'un mdp
export const loginByEmail = async(email , password) =>{

    try {

        return await signInWithEmailAndPassword(auth, email , password) ;

    } catch (error) {

        return error.code ;
    }


}

export const logout = () =>{
    signOut(auth) ;
}