import { deleteResource } from "../../services/ResourceService.jsx"

export const  ResourceModule = ({userResource, getAndSetResources}) => {

    
    const handleResourceDelete = (event) => {
        event.preventDefault()
        deleteResource(userResource.id).then(() => {
        getAndSetResources()
            })
        }
 return <li key={userResource.id}>{userResource?.resource?.name}
 <button
 onClick={handleResourceDelete}>Delete</button>
 </li>
    
    
    
    



}