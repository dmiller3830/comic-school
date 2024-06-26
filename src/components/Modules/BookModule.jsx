import { deleteBook } from "../../services/BookService.jsx"



export const BookModule = ({userBook, getAndSetBooks}) => {
   

    const handleBookDelete = (event) => {
        event.preventDefault()
        deleteBook(userBook.id).then(() => {
         getAndSetBooks()   
        })
    }

   
   
   
   return <li key={userBook.id}>{userBook?.book?.title}
    <button
    onClick={handleBookDelete}>Delete</button>
    </li>



}