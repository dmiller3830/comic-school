export const getModulesByUser = (userId) => {
    return fetch(`http://localhost:8088/modules?userId=${userId}`).then((response) => response.json())
}