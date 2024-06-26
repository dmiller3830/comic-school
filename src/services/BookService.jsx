


export const getAllBooks = () => {
    return fetch (`http://localhost:8088/books`).then((res) => res.json())
}

  export const AddNewBook = (newbook) => {
    return fetch(`http://locaLhost:8088/book-modules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body:JSON.stringify(newbook),
    })
  }

  export const deleteBook = (id) => {
    return fetch(`http://localhost:8088/book-modules/${id}`, {
      method: "DELETE",
    })
  }