import { useEffect, useState } from "react"
import { AddNewBook, getAllBooks } from "../../services/BookService.jsx"
import { useLocation, useNavigate, useParams } from "react-router-dom"



export const AddBookList = ({currentUser}) => {
    const moduleId=useParams()
    const navigate = useNavigate()

    const [newBook, setNewBook] = useState({
        userId:0, 
        bookId:0, 
        moduleId:moduleId.moduleId
    })
    const [addBook, setAddBook] = useState([])
        useEffect(() => {
        getAllBooks().then(bookChoices => {
            setAddBook(bookChoices)
        })
    },[])

 const handleAddBook = (bookId) => {
            const newBookCopy = {...newBook}
            newBookCopy.bookId = bookId
            newBookCopy.userId=currentUser.id
            AddNewBook(newBookCopy)
            .then(()=>navigate(`/modules/${moduleId.moduleId}`))
     
    }

   
  


    return (
        <div>

            <ul>
                {addBook.map(singleBook => {
                    return <div key={singleBook.id}>

                        <li>
                            <h2>{singleBook.title}</h2>
                            <button
                            onClick={()=>handleAddBook(singleBook.id)}
                            >Add</button>
                            
                        </li>
                    </div>
                })}
            </ul>



        </div>
    )
    
}


