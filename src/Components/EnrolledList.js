//Teacher Enrollement, based on roster, based on build a class 3
import React from 'react'

export default function EnrolledList({enrolledStudents}) {
    return (
        <div>
            <h3>Enrolled</h3>
            <h4>Student Count:{enrolledStudents.length}</h4>
            <h4>Average GPA:{avgGpa(enrolledStudents)}</h4> 
            <ul></ul>           
        </div>
    )
}

const avgGpa = (enrolledStudents) => {
    let sum = 0 

    enrolledStudents.forEach((students)=>{
        sum += students.GPA
    })
    return sum/enrolledStudents.length  
    
}
