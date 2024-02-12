import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllStudent = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3005/api/student/viewall").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])
    return (
        <div>

            <NavBar />

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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.name}</td>
                                            <td>{value.rollno}</td>
                                            <td>{value.admno}</td>
                                            <td>{value.clgName}</td>
                                            <td>{value.parentName}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.email}</td>
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

export default ViewAllStudent