


export const getAllResources = () => {
    return fetch(`http://localhost:8088/resources`).then((res) => res.json())
}

export const AddNewResource = (newresource) => {
    return fetch(`http://localhost:8088/resource-modules`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newresource)
    })
}

export const deleteResource = (id) => {
    return fetch(`http://localhost:8088/resource-modules/${id}`, {
        method: "DELETE",
    })
}