import { deleteResource } from "../../services/ResourceService.jsx"

export const  ResourceModule = ({userResource, getAndSetResources}) => {

    
    const handleResourceDelete = (event) => {
        event.preventDefault()
        deleteResource(userResource.id).then(() => {
        getAndSetResources()
            })
        }
 return <div className="modules" key={userResource.id}>{userResource?.resource?.name}
<div>
<a href={userResource?.resource?.link} target="_blank">
                        <img 
                        border="0"
                        alt="pic"
                        src={userResource?.resource?.image}
                        width="100"
                        height="100">
                         </img>
                        </a>
</div>
<div>

 <button
 onClick={handleResourceDelete}>Delete</button>
</div>


 </div>
    
    
    
    



}