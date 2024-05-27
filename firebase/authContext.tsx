import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebaseConfig";
import { doc, getDoc, setDoc} from 'firebase/firestore';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthed, setIsAuthed] = useState(undefined);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user){
                setIsAuthed(true);
                setUser(user);
            } else {
                setIsAuthed(false)
                setUser(undefined);
            }
        });
    }, [])

    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            
            return {success: true, data: response?.user}
        } catch (e) {
            console.log(e)
        }
    }

    const logout = async () => {
        try {
            signOut(auth)
        } catch (e) {
            console.log(e)
        }
    }

    const register = async (email, password, name) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", response?.user?.uid), {
                name,
                userId: response?.user?.uid
            })
            return { success: true, data: response?.user }
        } catch (e) {
            let msg = e.message;
            if(msg.includes('invalid-email')) msg = 'Invalid Email'
            if(msg.includes('email-already-in-use')) msg = 'This email is already in use'
            return { success: false, msg}
        }
    }

    const forgotPassword = async (email) => {
        try {

        } catch (e) {
            
        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthed, login, register, logout, forgotPassword}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if(!value){
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }
    
    return value;
}