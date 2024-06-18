import { useEffect } from "react"
import { getModulesByUser } from "../../services/ModuleService.jsx"


export const ModuleList = (currentUser) => {
    const [ modules, setModules] = useState([])

    useEffect(() => {
        getModulesByUser(currentUser.id).then(currentModule => {
            setModules(currentModule)
        })
    })

    return (

        <div >
        <h1>Modules </h1>
        <ul>
            {modules.map(moduleObj => {
                return <div key={moduleObj.id}>
               
                    <li >
                        <h2>{moduleObj.name}</h2>
                       
                    </li>

                
             </div>
            })}
            </ul>   

 </div>
   
    )

}