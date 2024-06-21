import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {  getAssignmentsByModule, getBooksByModule, getModuleById } from "../../services/ModuleService.jsx";




export const ModuleDetails = () => {

    const [moduleDetails, setModuleDetails] = useState({});
    const {userId} = useParams();
    const [bookDetails, setBookDetails] = useState({});
    const [assignmentDetails, setAssignmentDetails] = useState({})
  

    useEffect(() => {

        getModuleById(userId).then(singleModule => {
            setModuleDetails(singleModule);

        })

    }, [] )



    useEffect(() => {

        getBooksByModule(userId).then(singleBook => {
            setBookDetails(singleBook);
        })
    },[])

    useEffect(() => {

        getAssignmentsByModule(userId).then(singleAssignment => {
            setAssignmentDetails(singleAssignment);
        })
    },[])

  

    const navigate = useNavigate()

    return (
        <>

        <div>
       
       
        <h1>{moduleDetails.name}</h1>

        <h3>Books:{bookDetails.book}
        </h3>
        <h3>Assignments{assignmentDetails.assignment}
        </h3>
        
      
      
      
       <button>
        Add Book
       </button>
       
        <button>
        Add Assignment
       </button>
        </div>


       
        </>


        )
    
}