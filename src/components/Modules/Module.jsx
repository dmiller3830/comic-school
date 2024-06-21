import { useEffect, useState } from "react"
import { getAssignmentByUser } from "../../services/ModuleService.jsx"
import { useNavigate } from "react-router-dom"

export const Module = ({moduleObj, moduleAssignment, moduleBook, currentUser}) => {

        const currentModuleAssignment = moduleAssignment.filter(assignment => assignment.moduleId === moduleObj.id) 

         const currentModuleBook = moduleBook.filter(book => book.moduleId === moduleObj.id)
   
const navigate = useNavigate()
   
   
   return(
        <div>
        <h2>{moduleObj.name}</h2>
        <div>
        assignment:
            {currentModuleAssignment.map(singleAssignment =>{
                return <>
                
             {singleAssignment.assignment?.title}
                
                
                </>
            })}
        
        </div>
        <div>
            Book:
            {currentModuleBook.map(singleBook => {
                return<>
                {singleBook.book.title}
                
                </>
            })}
        </div>
        <div>
        <button
            onClick={() => {navigate(`${currentUser.id}`)}}>
                Details
            </button>
        </div>
        
      
    </div>

    )
}