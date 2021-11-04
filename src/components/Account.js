import React from 'react'
import classes from '../styles/Account.module.css'
import { useAuth } from '../contexts/AuthContext'

import { Link } from "react-router-dom"

export default function Account() {
    const { currentUser, logout } = useAuth()
    return (
        <div className={classes.account}>
            {
                currentUser ? (
                    <>
                        <span>{currentUser.displayName}</span>
                        <span className="material-icons-outlined" title="Logout" onClick={logout} > logout </span>
                    </>) : (
                    <>
                        <span className="material-icons-outlined" title="Account">
                            account_circle
                        </span>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>)
            }


        </div>
    )
}
