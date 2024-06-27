import { useEffect, useState } from "react"
import { AddNewResource, getAllResources } from "../../services/ResourceService.jsx"
import { useNavigate, useParams } from "react-router-dom"




export const AddResourceList = ({currentUser}) => {
    const moduleId=useParams()
    const navigate=useNavigate()

    const [newResource, setNewResource] = useState({
        userId:0,
        bookId:0,
        moduleId:moduleId.moduleId
    })

    const [addResource, setAddResource] = useState([])
        useEffect(() => {
            getAllResources().then(resourceChoices => {
                setAddResource(resourceChoices)
            })
        },[])

  const handleAddResource = (resourceId) => {
    const newResourceCopy = {...newResource}
    newResourceCopy.resourceId = resourceId
    newResourceCopy.userId=currentUser.id
    AddNewResource(newResourceCopy)
    .then(()=>navigate(`/modules/${moduleId.moduleId}`))
  }

    

    return (
        <div>

            <ul>
                {addResource.map(singleResource => {
                    return <div key={singleResource.id}>

                        <li>
                            <h2>{singleResource.name}</h2>
                            <button
                            onClick={()=>handleAddResource(singleResource.id)}>
                                Add
                            </button>
                        </li>


                    </div>
                })}
            </ul>

            
        </div>
    )
}