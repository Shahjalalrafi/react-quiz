import React from 'react'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'

import { Link } from "react-router-dom";

import classes from '../../styles/Form.module.css'

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>

            <div className="column">
                <Illustration />

                <Form className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter name" icon="person" />

                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon="lock_clock"
                    />

                    <Checkbox text="I agree to the Terms &amp; Conditions" />

                    <Button><span>Submit Now</span></Button>

                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}
