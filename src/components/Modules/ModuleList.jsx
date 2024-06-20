import { useEffect, useState } from "react"
import { getAssignmentByUser, getBookByUser, getModulesByUser } from "../../services/ModuleService.jsx"
import { Navigate, useNavigate } from "react-router-dom"
import { Module } from "./Module.jsx"


export const ModuleList = ({currentUser}) => {
    const [ modules, setModules] = useState([])
    const [moduleAssignment, setModuleAssignment] = useState([])
    const [moduleBook, setModuleBook] = useState([])

    useEffect(() => {
        getModulesByUser(currentUser.id).then(moduleArray => {
            setModules(moduleArray)
        })
    },[currentUser])

    const Navigate = useNavigate()



    useEffect(() => {
        getAssignmentByUser(currentUser.id).then(assignmentArray =>{
            const moduleAssignments = assignmentArray.filter(assignment => assignment.userId === currentUser.id)
            setModuleAssignment(moduleAssignments)

            console.log(moduleAssignments)
        })
    },[currentUser])

    useEffect(() => {
        getBookByUser(currentUser.id).then(bookArray => {
            const moduleBook = bookArray.filter(book => book.userId === currentUser.id)
            setModuleBook(moduleBook)
        })
    },[currentUser])




    return (

        <div className="modules">
        <h1>Modules </h1>
        {modules.map(moduleObj => {
            return<> <Module moduleObj={moduleObj}
            currentUser={currentUser}
            moduleAssignment={moduleAssignment}
            moduleBook={moduleBook}/></>
        })}
         <div>
</div>
     <button 
        onClick={() => {Navigate("/modules/create")}}>
            Create
        </button>
</div>
   
    )

}