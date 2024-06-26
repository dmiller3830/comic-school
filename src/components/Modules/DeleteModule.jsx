import { DeleteModule, getModulesByUser } from "../../services/ModuleService.jsx"

 


export const ModuleDelete = ({moduleObj, getAndSetModule, setModules, currentUser}) => {

    const handleModuleDelete = (event) => {
        event.preventDefault()
        DeleteModule(moduleObj.id).then(() => {
            getModulesByUser(currentUser.id).then(moduleArray => {
                setModules(moduleArray)
            })
    
        })
    }

    return  <div> 
          {/* {console.log("ModuleObj: ", moduleObj)} */}
        <button
        onClick={(event) => {handleModuleDelete(event)}}
         >Delete</button>

</div>
}