import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [input, setInput] = new useState(
        {
            name: "",
            password: ""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        if (input.name == "admin" && input.password == "admin"){
            alert("Login succes")
            navigate("/addstudent")
        }
        else {
            alert("Invalid login")
            setInput({
                name: "",
                password: ""
            })
        }

    }
    return (
        <div>

            <div className="container center">
                <div className="row">
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 border">
                            <h1>Login</h1>
                            <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger" onClick={readValues}>Login</button>
                            </div>
                            <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                Student Login <Link to="">Click Here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login