import { useEffect, useState } from "react"
import { getAllAssignments } from "../../services/AssignmentService.jsx"




export const AssignmentList = () => {
    const [assignments, setAllAssignments] = useState([])

    useEffect(() => {
        getAllAssignments().then(currentAssignment =>(
            setAllAssignments(currentAssignment)
        ))

    },[])

    return (

<div >
        <h1>Assignments </h1>
        <ul>
            {assignments.map(assignmentObj => {
                return <div key={assignmentObj.id}>
               
                    <li >
                        <h2>{assignmentObj.title}</h2>
                        
                    </li>

                
             </div>
            })}
            </ul>   

 </div>

    )

       
       
}