import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {  getAssignmentByModule, getAssignmentByUser, getBookByUser, getBookbyModule, getModuleById, getResourceByModule } from "../../services/ModuleService.jsx";
import { deleteBook } from "../../services/BookService.jsx";
import { BookModule } from "./BookModule.jsx";
import { AssignmentModule } from "./AssignmentModule.jsx";
import { ResourceModule } from "./ResourceModule.jsx";




export const ModuleDetails = () => {

    const [moduleDetails, setModuleDetails] = useState({});
    const [userBooks, setUserBooks] = useState([]);
    const [userAssignments, setUserAssignments] = useState([]);
    const [userResources, setUserResources] = useState([])
    const {userId} = useParams();
    const {moduleId} = useParams();

  
  

    useEffect(() => {

        getModuleById(moduleId).then(singleModule => {
            setModuleDetails(singleModule);

        })

    }, [] )

    const getAndSetBooks = () => {
        getBookbyModule(moduleId).then(booksArray => {
            setUserBooks(booksArray);

        })

    }

    useEffect(() => {

        getAndSetBooks()
    }, [] )

    const getAndSetAssignments = () => {
        getAssignmentByModule(moduleId).then(assignmentArray => {
            setUserAssignments(assignmentArray);
        })
    }

    useEffect(() => {
      getAndSetAssignments()

    }, [] )

    const getAndSetResources = () => {
        getResourceByModule(moduleId).then(resourcesArray => {
            setUserResources(resourcesArray);

        })
    }

    useEffect(() => {
        getAndSetResources()
    },[])

  

    const navigate = useNavigate()

    return (
        <>

        <div>
        <h1>{moduleDetails.name}</h1>
     <h3>Books:</h3>
     <ul>
        <div>
           
        {userBooks.map((userBook) => {
           return <BookModule key={userBook.id} userBook={userBook} getAndSetBooks={getAndSetBooks}/> })}
      
        </div>
       
     </ul>
       
       
       
        <h3>Assignments:</h3>
        <ul>
        {userAssignments.map((userAssignment) => {
           return <AssignmentModule key={userAssignment.id} userAssignment={userAssignment} getAndSetAssignments={getAndSetAssignments}/>
        })}
       
     </ul>

    

        <h3>Resources:</h3>
        <ul>
            <ul>
                {userResources.map((userResource) => {
                    return <ResourceModule key={userResource.id} userResource={userResource} getAndSetResources={getAndSetResources}/>
                })}
            </ul>
            
     </ul>


        <button
            onClick={() => {navigate(`/addbooks/${moduleId}`,)}}
             >Add Book</button>
       <button
       onClick={() => {navigate(`/addassignments/${moduleId}`)}}
       >Add Assignment</button>

       <button
       onClick={() => {navigate(`/addresources/${moduleId}`)}}>
        Add Resource
       </button>

    
        
        </div>
        </>
        )}