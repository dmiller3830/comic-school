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
                        <h2 className="section.assignment"
                         >{assignmentObj.title}
                         </h2>
                        <img 
                        src={assignmentObj.referenceImage} 
                        alt="picture" 
                        width="200" 
                        height ="200">                            
                         </img>
                        <h3 className="assignment-info">{assignmentObj.description}</h3>
                       
                    </div>

                
             </div>
            })}
            </ul>   

 </div>

    )

       
       
}