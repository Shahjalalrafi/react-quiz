// import React, { useState } from 'react'
// import Button from './Button'
// import Checkbox from './Checkbox'
// import Form from './Form'
// import TextInput from './TextInput'
// import { useAuth } from '../contexts/AuthContext'
// import { Link, useHistory } from "react-router-dom";

// export default function SignupForm() {
//     let [userName, setUserName] = useState("")
//     let [email, setEmail] = useState("")
//     let [password, setPassword] = useState("")
//     let [confirmPassword, setConfirmPassword] = useState("")
//     let [agree, setAgree] = useState("")
//     let [loading, setLoading] = useState("")
//     let [error, setError] = useState("")

//     const history = useHistory()

//     const { signUp } = useAuth()

//     async function handleSubmit(e) {
//         e.preventDefault()

//         if (password !== confirmPassword) {
//             setError("password Don't match")
//         }

//         try {
//             setError("")
//             setLoading(true)
//             await signUp(email, password, userName)
//             history.push("/")
//         } catch (err) {
//             console.log(err)
//             setLoading(false)
//             setError("Faild to create an Account!")
//         }
//     }

//     return (
//         <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
//             <TextInput
//                 required
//                 type="text"
//                 placeholder="Enter name"
//                 value={userName}
//                 onChange={e => setUserName(e.target.value)}
//                 icon="person" />

//             <TextInput
//                 required
//                 type="text"
//                 placeholder="Enter email"
//                 icon="alternate_email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//             />

//             <TextInput
//                 required
//                 type="password"
//                 placeholder="Enter password"
//                 icon="lock"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//             />

//             <TextInput
//                 required
//                 type="password"
//                 placeholder="Confirm password"
//                 icon="lock_clock"
//                 value={confirmPassword}
//                 onChange={e => setConfirmPassword(e.target.value)}
//             />

//             <Checkbox
//                 required
//                 text="I agree to the Terms &amp; Conditions"
//                 value={agree}
//                 onChange={e => setAgree(e.target.value)}
//             />

//             <Button disabled={loading} type="submit"><span>Submit Now</span></Button>

//             {
//                 error && <p className="error">{error}</p>
//             }

//             <div className="info">
//                 Already have an account? <Link to="/login">Login</Link> instead.
//             </div>
//         </Form>
//     )
// }

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signUp } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextInput
        type="text"
        required
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        required
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
