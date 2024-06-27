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
        <div className="resources">
            <h1>Resources </h1>
            <ul>
                {resources.map(resourceObj => {
                    return <div key={resourceObj.id}>

                    <li>
                        <h2>{resourceObj.name}</h2>

                    </li>


                    </div>
                })}
            </ul>


        </div>
    )
}