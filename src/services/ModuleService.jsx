export const getModulesByUser = (userId) => {
    return fetch(`http://localhost:8088/modules?userId=${userId}`).then((response) => response.json())
}

export const CreateNewModule = (newModule) => {
    return fetch(`http://localhost:8088/modules`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(newModule), 
    })
}

export const getAssignmentByUser = (userId) => {
    return fetch(`http://localhost:8088/assignment-modules?userId=${userId}&_expand=assignment`).then((response) => response.json())
}
//
export const getBookByUser = (userId) => {
    return fetch(`http://localhost:8088/book-modules?userId=${userId}&_expand=book`).then((response) => response.json())
}

export const getModuleById = (userId) => {
    return fetch(`http://localhost:8088/modules/${userId}`).then((response) => response.json())
}

export const getBookbyModule = (moduleId) => {
    return fetch(`http://localhost:8088/book-modules?moduleId=${moduleId}&_expand=book`).then((response) => response.json())
}

export const getAssignmentByModule = (moduleId) => {
    return fetch(`http://localhost:8088/assignment-modules?moduleId=${moduleId}&_expand=assignment`).then((response) => response.json())
}

export const DeleteModule = (id) => {
    return fetch(`http://localhost:8088/modules/${id}`, {
        method: "DELETE", 
    })

}