import React from 'react'
import StudentCard from '../ui/StudentCard'
import { StudentsData } from '../components/data/StudentData'

const Students = () => {
  return (
    <>
    <section className="container p-5 my-2">
      <div className="row gy-3">
         {
          StudentsData.map((ele)=><StudentCard {...ele}/>)
         }
      </div>
    </section>
    </>  
  )
}

export default Students