import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [credentials, setCredentials] = useState({name:"", email: "", password: "" , cpassword: ""})
    const history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const {name,email,password,cpassword} = credentials;
            const response = await fetch(
                "https://black-hairdresser-mvcqo.pwskills.app:8000/api/auth/createuser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: credentials.name,
                        email: credentials.email,
                        password: credentials.password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch");
            }

            const json = await response.json();
            console.log(json);

            localStorage.setItem('token', json.authToken);
            history('/');
        } catch (error) {
            console.error(error);
            // Handle the error here, such as displaying an error message to the user
        }
    };


    // onChange Function----------------
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name " className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={onChange} id="name" aria-describedby="emailHelp" name='name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" aria-describedby="emailHelp" name='email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} minLength={5} required id="password" name='password' />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} minLength={5} required id="cpassword" name='cpasssword' />
                </div>
                <button   type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp