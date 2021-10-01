import React from 'react'
import classes from '../styles/Layout.module.css'
import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </div>
        </>
    )
}
