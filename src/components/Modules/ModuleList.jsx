import { useEffect, useState } from "react"
import { getAssignmentByUser, getBookByUser, getModulesByUser } from "../../services/ModuleService.jsx"
import { Navigate, useNavigate } from "react-router-dom"
import { Module } from "./Module.jsx"
import "./Module.css"


export const ModuleList = ({currentUser}) => {
    const [ modules, setModules] = useState([])
    const [moduleAssignment, setModuleAssignment] = useState([])
    const [moduleBook, setModuleBook] = useState([])
    const localcomicUser = localStorage.getItem("comic_user")
    const comicUserObj = JSON.parse(localcomicUser)

    useEffect(() => {
        getModulesByUser(comicUserObj.id).then(moduleArray => {
            setModules(moduleArray)
        })
    },[currentUser])

    const Navigate = useNavigate()



    useEffect(() => {
        getAssignmentByUser(comicUserObj.id).then(assignmentArray =>{
            const moduleAssignments = assignmentArray.filter(assignment => assignment.userId === currentUser.id)
            setModuleAssignment(moduleAssignments)

            console.log(moduleAssignments)
        })
    },[currentUser])

    useEffect(() => {
        getBookByUser(comicUserObj.id).then(bookArray => {
            const moduleBook = bookArray.filter(book => book.userId === currentUser.id)
            setModuleBook(moduleBook)
        })
    },[currentUser])




    return (

        <div className="module-header">
        <h1>Modules </h1>

        <div className="modules">
        {modules.map(moduleObj => {
            return<> <Module moduleObj={moduleObj}
            currentUser={comicUserObj}
            moduleAssignment={moduleAssignment}
            moduleBook={moduleBook}
            setModules={setModules} /></>
            

          
           
         
        })}

</div>
       
         <div>
</div>
     <button 
        onClick={() => {Navigate("/modules/create")}}>
            Create
        </button>
       
</div>
   
    )

}