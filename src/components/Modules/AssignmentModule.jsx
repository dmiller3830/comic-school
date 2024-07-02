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
           width="300" 
           height="300">
           </img>


      
   </div>

   <div>
   <h3
   className="module-info">{userAssignment?.assignment?.description}</h3>

   </div>

   <div>

   <button
    onClick={handlesAssignmentDelete}>Delete</button>

   </div>
    
    </div>
}