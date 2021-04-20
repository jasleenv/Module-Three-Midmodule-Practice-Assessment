//Enrolled total student and average GPA, add to class 2
import React from 'react'
import StudentCard from "./StudentCard"

export default function AddToClass({studentData}) {
    return (
        // studentData.map
        <div>
           <h1>Add to Class</h1> 
           <div>
            {studentData.map((student,i)=>{
                return  (<StudentCard name={student.name} 
                    age={student.age} bio={student.bio} 
                    image={student.image} gpa={student.GPA}/>)
                        
                
            })}
           </div>
            
        </div>
    )
}
