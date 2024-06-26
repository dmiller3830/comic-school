import { deleteAssignment } from "../../services/AssignmentService.jsx"



export const AssignmentModule =({userAssignment, getAndSetAssignments}) => {
   
    const handlesAssignmentDelete = (event) => {
        event.preventDefault()
        deleteAssignment(userAssignment.id).then(() => {
            getAndSetAssignments()
        })
    }
    
   
   
   return <li>{userAssignment?.assignment?.title}
    <button
    onClick={handlesAssignmentDelete}>Delete</button>
    </li>
}