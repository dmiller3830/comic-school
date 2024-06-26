import { useEffect, useState } from "react"
import { getAssignmentByUser, getModulesByUser } from "../../services/ModuleService.jsx"
import { useNavigate } from "react-router-dom"
import { ModuleDelete } from "./DeleteModule.jsx"

export const Module = ({moduleObj, moduleAssignment, moduleBook, currentUser, setModules}) => {
       
    const [userModules, setUserModules] = useState([])
        const currentModuleAssignment = moduleAssignment.filter(assignment => assignment.moduleId === moduleObj.id) 
        const currentModuleBook = moduleBook.filter(book => book.moduleId === moduleObj.id)
        const navigate = useNavigate()
       
       
        const getAndSetModule = () => {
        getModulesByUser(moduleObj).then(modulesArray => {
        setUserModules(modulesArray);
    })
}
// useEffect(() => {
//     getAndSetModule()
// })
   return(
        <div>
        <h2>{moduleObj.name}
      
        <ModuleDelete key={moduleObj.id} moduleObj={moduleObj} getAndSetModule={getAndSetModule} setModules={setModules} currentUser={currentUser}/>
        
        </h2>
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
            onClick={() => {navigate(`${moduleObj.id}`)}}>
                Details
            </button>
          
        </div>
        
      
    </div>

    )
}