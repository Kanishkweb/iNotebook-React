import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://black-hairdresser-mvcqo.pwskills.app:8000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password,
                    }),

                }
            );

            // if (!response.ok) {
            //     console.log("Failed to fetch");
            // }

            const json = await response.json();
            console.log(json);

            if (json.success) {
                // Save the auth-token and redirect 
                localStorage.setItem('token', json.authToken);
                //Todo Alert
                history('/');
            }
            } catch (error) {
                alert('Invalid Credentials');
                // Handle the error here, such as displaying an error message to the user
            }
        };


        // onChange Function----------------
        const onChange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })

        }
        return (
            <>
                <div className="container">
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="eamil" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} />
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </>
        )
    }

    export default Login