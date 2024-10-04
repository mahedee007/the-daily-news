import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {


const [user, setUser] = useState(null)

const loginUser = (name, password) => {
return createUserWithEmailAndPassword(auth, name, password)
}
const logOut = ()=>{
    return signOut(auth)
}
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changed', currentUser);
        setUser(currentUser);
        
    });
    return () => {
        unSubscribe();
    }
}, [])

const authInfo = {
    user,
    loginUser,
    logOut
}
    return (
       <AuthContext.Provider value={authInfo}  >
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;