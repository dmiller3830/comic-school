import { useEffect, useState } from "react"
import { getAllBooks } from "../../services/BookService.jsx"
import "./Books.css"
// import { Navigate, useNavigate } from "react-router-dom"



 
export const BookList = () => {
    const [books, setAllBooks] = useState([])

    useEffect(() => {
        getAllBooks().then(currentBook => {
            // const filterArray = currentBook.filter(book => book.id === currentBook.id)
            setAllBooks(currentBook)
        })

    },[])

    // const navigate = useNavigate()
   return (

    <div className="books">
        <h1>Books </h1>
        <ul>
            {books.map(bookObj => {
                return <div key={bookObj.id}>
               
                    <li >
                        <h2>{bookObj.title}</h2>
                       
                    </li>

                
             </div>
            })}
            </ul>   

 </div>
   )
    


    
}