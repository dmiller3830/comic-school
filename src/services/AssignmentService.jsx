


export const getAllAssignments = () => {
    return fetch (`http://localhost:8088/assignments`).then((res) => res.json())
}