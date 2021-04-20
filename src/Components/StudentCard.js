import React from 'react'

export default function StudentCard(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Age:{props.age}</p>
            <p>Bio:{props.bio}</p>
            <img src={props.image} alt={props.name}/>
            <p>GPA:{props.gpa}</p>
            <button>Add to Class</button>
        
        </div>
    )
}
