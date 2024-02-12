import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const StudentAdd = () => {
    const [input, setInput] = new useState(
        {
            name: "",
            rollno: "",
            admno: "",
            clgName: "",
            parentName: "",
            phone: "",
            email: "",
            password: ""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3005/api/student/studentadd",input).then((response)=>{
            console.log(response.data)
            if (response.data.status == "success") {
                alert("Student details added")
                setInput(
                    {
                        name: "",
                        rollno: "",
                        admno: "",
                        clgName: "",
                        parentName: "",
                        phone: "",
                        email: "",
                        password: ""
                    })
            }
            else {
                alert("Something went wrong ...")
                setInput(
                    {
                        name: "",
                        rollno: "",
                        admno: "",
                        clgName: "",
                        parentName: "",
                        phone: "",
                        email: "",
                        password: ""
                    }
                )
            }

        })
    }

    return (
        <div>

            <NavBar />
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Rollno</label>
                                <input type="text" className="form-control" name='rollno' value={input.rollno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission No</label>
                                <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College Name</label>
                                <input type="text" className="form-control" name='clgName' value={input.clgName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Parent Name</label>
                                <input type="text" className="form-control" name='parentName' value={input.parentName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone No</label>
                                <input type="number" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-danger" onClick={readValues}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentAdd