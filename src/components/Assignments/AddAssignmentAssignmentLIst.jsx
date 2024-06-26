import { useEffect, useState } from "react"
import { AddNewAssignment, getAllAssignments } from "../../services/AssignmentService.jsx"
import { useNavigate, useParams } from "react-router-dom"


export const AddAssignmentList = ({currentUser}) => {
    const moduleId=useParams()
    const navigate = useNavigate()

    const [newAssignment, setNewAssignment] = useState({
        userId:0,
        assignmentId:0, 
        moduleId:moduleId.moduleId
    })
     const [addAssignment, setAddAssignment] = useState([])
         useEffect(() => {
        getAllAssignments().then(assignmentChoices => {
            setAddAssignment(assignmentChoices)
        })
    },[])

    const handleAddAssignment =(assignmentId) => {
        const newAssignmentCopy = {...newAssignment}
        newAssignmentCopy.assignmentId = assignmentId
        newAssignmentCopy.userId=currentUser.id
        AddNewAssignment(newAssignmentCopy)
        .then(()=>navigate(`/modules/${moduleId.moduleId}`))
    }

    

   

    return (
        <div>

            <ul>
                {addAssignment.map(singleAssignment => {
                    return <div key={singleAssignment.id}>

                        <li>
                            <h2>{singleAssignment.title}</h2>
                            <button
                            onClick={()=>handleAddAssignment(singleAssignment.id)}
                            >Add</button>
                        </li>
                    </div>
                })}
            </ul>
        </div>
    )
}