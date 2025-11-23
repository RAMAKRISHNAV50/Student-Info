import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StudentsData } from '../components/data/StudentData'

const StudentDetails = () => {
    const {sid}=useParams()
    console.log(sid)
    let studata =StudentsData.find(ele=>ele.id==sid) 
    const {id,name,age, sex,phone,address,dob,marks,attendance,image} =studata
    let navigate=useNavigate()
  return (
    <>
    <div className="container p-5">
        <h1 className="card-name">{name}</h1>
        <p className="card-name">{attendance}</p>
        <button className='btn btn-danger' onClick={()=>navigate("/student")}>Back</button>
    </div>
    </>
  )
}

export default StudentDetails