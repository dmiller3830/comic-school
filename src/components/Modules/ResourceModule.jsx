import { deleteResource } from "../../services/ResourceService.jsx"

export const  ResourceModule = ({userResource, getAndSetResources}) => {

    
    const handleResourceDelete = (event) => {
        event.preventDefault()
        deleteResource(userResource.id).then(() => {
        getAndSetResources()
            })
        }
 return <div className="modules" key={userResource.id}>{userResource?.resource?.name}
 <button
 onClick={handleResourceDelete}>Delete</button>
 </div>
    
    
    
    



}