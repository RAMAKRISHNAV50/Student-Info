import React from 'react'
import { Link } from 'react-router-dom'

const StudentCard = (props) => {
  console.log(props)
    const {id,name,age, sex,phone,address,dob,marks,attendance,image} = props
  return (
    <>
    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
      <Link to={`/student/${id}`}>
      <div className="card border border-primary shadow rounded p-3 ">
        <img src={image} alt="" />
      <h4 className='card-title'>{name}</h4>
      <p className="card-text">{age}</p>
      <p className="card-text">{sex}</p>
      <p className="card-text">{dob}</p>
      <p className="card-text">{attendance}</p>
      <button className='btn btn-outline-success fw-bold text-capitalize'>Get Details</button>
      </div>
      </Link>
    </div>
    </>
  )
}
export default StudentCard