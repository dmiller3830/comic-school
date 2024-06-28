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

    <div className="book-header">
        <h1>Books </h1>
        <ul>
            {books.map(bookObj => {
                return <div key={bookObj.id}>
               
                    <div >
                        <h2 className="section.book">{bookObj.title}</h2>
                       <h3 className="book-info">Description of Book goes here</h3>
                    </div>

                
             </div>
            })}
            </ul>   

 </div>
   )
    


    
}