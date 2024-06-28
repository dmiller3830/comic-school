import { deleteBook } from "../../services/BookService.jsx"
import "./Module.css"


export const BookModule = ({userBook, getAndSetBooks}) => {
   

    const handleBookDelete = (event) => {
        event.preventDefault()
        deleteBook(userBook.id).then(() => {
         getAndSetBooks()   
        })
    }

   
   
   
   return <div className="modules" key={userBook.id}>{userBook?.book?.title}
    <button
    onClick={handleBookDelete}>Delete</button>
    </div>



}