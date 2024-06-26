


export const getAllAssignments = () => {
    return fetch (`http://localhost:8088/assignments`).then((res) => res.json())
}

export const AddNewAssignment = (newassignment) => {
    return fetch(`http://localhost:8088/assignment-modules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newassignment)
    })
}

export const deleteAssignment = (id) => {
    return fetch(`http://localhost:8088/assignment-modules/${id}`, {
        method: "DELETE",
    })
}