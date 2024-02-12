import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const StudentMark = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3005/api/student/viewallmark").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])
  return (
    <div>
        
        <NavBar/>
        <div className="container">
                <div className="row ">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Rollno</th>
                                    <th scope="col">Admission No</th>
                                    <th scope="col">College Name</th>
                                    <th scope="col">Parent Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Subject 1</th>
                                    <th scope="col">Subject 2</th>
                                    <th scope="col">Subject 3</th>
                                    <th scope="col">Subject 4</th>
                                    <th scope="col">Subject 5</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.userId.name}</td>
                                            <td>{value.userId.rollno}</td>
                                            <td>{value.userId.admno}</td>
                                            <td>{value.userId.clgName}</td>
                                            <td>{value.userId.parentName}</td>
                                            <td>{value.userId.phone}</td>
                                            <td>{value.userId.email}</td>
                                            <td>{value.mark1}</td>
                                            <td>{value.mark2}</td>
                                            <td>{value.mark3}</td>
                                            <td>{value.mark4}</td>
                                            <td>{value.mark4}</td>
                                        </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default StudentMark