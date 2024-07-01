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
  
  
   <div>
   <img 
           border="0" 
           alt="bookpic" 
           src={userBook?.book?.image} 
           width="100" 
           height="100">
           </img>

<h3>{userBook?.book?.description}</h3>
      
   </div>
    
    
    <div>
    <button
    onClick={handleBookDelete}>Delete
    </button>
   
    </div>
    
   
   
    </div>



}