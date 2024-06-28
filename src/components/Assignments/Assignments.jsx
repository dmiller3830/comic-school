import { useEffect, useState } from "react"
import { getAllAssignments } from "../../services/AssignmentService.jsx"
import "./Assignments.css"



export const AssignmentList = () => {
    const [assignments, setAllAssignments] = useState([])

    useEffect(() => {
        getAllAssignments().then(currentAssignment =>(
            setAllAssignments(currentAssignment)
        ))

    },[])

    return (

<div className="assignment-header" >
        <h1 >Assignments </h1>
        <ul>
            {assignments.map(assignmentObj => {
                return <div key={assignmentObj.id}>
               
                    <div>
                        <h2 className="section.assignment">{assignmentObj.title}</h2>
                        <h3 className="assignment-info">Description of Assignment goes Here</h3>
                    </div>

                
             </div>
            })}
            </ul>   

 </div>

    )

       
       
}