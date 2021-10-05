import React, { useContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState()

    useEffect(()=> {
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
          });

          return unsubscribe
    }, [])

    // SignUP
    async function signUp(email, password, username) {
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password)

        // Update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        })
        const user = auth.currentUser;
        setCurrentUser({
            ...user
        })
    }

    // Login
    function login(email, password) {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    function logout() {
        const auth = getAuth()
        return signOut(auth)
    }

    const value = {
        currentUser,
        signUp,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}