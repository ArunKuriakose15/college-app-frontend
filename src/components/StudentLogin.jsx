import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StudentLogin = () => {
    
    const navigate=useNavigate()

    const [input, setInput] = new useState(
        {
            email:"",
            password:""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3005/api/student/studentlogin", input).then((response) => {
            console.log(response.data)

            if (response.data.status == "invalid user") {
                alert("Invalid Email")
                setInput(
                    {
                        email:"",
                        password:""
                    }
                )
            } else if(response.data.status == "invalid password") {
                alert("Invalid Password")
                setInput(
                    {
                        email:"",
                        password:""
                    }
                )
            }
            else{
                alert("Login Success")
                console.log(response.data.studData._id)
                sessionStorage.setItem("studId",response.data.studData._id)
                navigate("/addmark")
            }
            
        })
    }
    return (
        <div>

            <div className="container center">
                <div className="row">
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 border">
                            <h1>Student Login</h1>
                            <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValues}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin