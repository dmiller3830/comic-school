import { deleteAssignment } from "../../services/AssignmentService.jsx"



export const AssignmentModule =({userAssignment, getAndSetAssignments}) => {
   
    const handlesAssignmentDelete = (event) => {
        event.preventDefault()
        deleteAssignment(userAssignment.id).then(() => {
            getAndSetAssignments()
        })
    }
    
   
   
   return <div className="modules">{userAssignment?.assignment?.title}
   <div>
   <img 
           border="0" 
           alt="bookpic" 
           src={userAssignment?.assignment?.referenceImage} 
           width="100" 
           height="100">
           </img>

<h3>{userAssignment?.assignment?.description}</h3>
      
   </div>

   <div>

   <button
    onClick={handlesAssignmentDelete}>Delete</button>

   </div>
    
    </div>
}