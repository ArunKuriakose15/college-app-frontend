import React, { useState } from 'react'
import StudNavBar from './StudNavBar'
import axios from 'axios'

const StudentMarkAdd = () => {
    const [input, setInput] = new useState(
        {
            userId: sessionStorage.getItem("studId"),
            mark1: "",
            mark2: "",
            mark3: "",
            mark4: "",
            mark5: ""
        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3005/api/studmark/addmark", input).then((response) => {
            console.log(response.data)

            if (response.data.status == "success") {
                alert("Submitted successfully")
                setInput(
                    {
                        mark1: "",
                        mark2: "",
                        mark3: "",
                        mark4: "",
                        mark5: ""
                    }
                )

            } else {
                alert("Something went wront try again...")
                setInput(
                    {
                        mark1: "",
                        mark2: "",
                        mark3: "",
                        mark4: "",
                        mark5: ""
                    }
                )
            }
        })
    }
    return (
        <div>

            <StudNavBar />
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 1</label>
                                <input type="text" className="form-control" name='mark1' value={input.mark1} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 2</label>
                                <input type="text" className="form-control" name='mark2' value={input.mark2} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 3</label>
                                <input type="text" className="form-control" name='mark3' value={input.mark3} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 4</label>
                                <input type="text" className="form-control" name='mark4' value={input.mark4} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject 5</label>
                                <input type="text" className="form-control" name='mark5' value={input.mark5} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-warning" onClick={readValues}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentMarkAdd