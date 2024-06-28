import { deleteAssignment } from "../../services/AssignmentService.jsx"



export const AssignmentModule =({userAssignment, getAndSetAssignments}) => {
   
    const handlesAssignmentDelete = (event) => {
        event.preventDefault()
        deleteAssignment(userAssignment.id).then(() => {
            getAndSetAssignments()
        })
    }
    
   
   
   return <div className="modules">{userAssignment?.assignment?.title}
    <button
    onClick={handlesAssignmentDelete}>Delete</button>
    </div>
}