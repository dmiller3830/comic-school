import { useEffect, useState } from "react"
import { getAllResources } from "../../services/ResourceService.jsx"
import "./Resources.css"



export const ResourceList = () => {
    const [resources, setAllResources] = useState([])

    useEffect(() => {
        getAllResources().then(currentResource => {
            setAllResources(currentResource)
        })
    },[])

    return (
        <div className="resource-header">
            <h1>Resources </h1>
            <ul>
                {resources.map(resourceObj => {
                    return <div key={resourceObj.id}>

                    <div>
                        <h2 className="resource">{resourceObj.name}</h2>
                        <h3 className="resource-info">{resourceObj.description}</h3>
                        <a href={resourceObj.link} target="_blank">
                        <img 
                        border="0"
                        alt="pic"
                        src={resourceObj.image}
                        width="500"
                        height="500">
                         </img>
                        </a>
                    </div>


                    </div>
                })}
            </ul>


        </div>
    )
}