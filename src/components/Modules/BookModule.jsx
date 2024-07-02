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
           width="300" 
           height="300">
           </img>

      
   </div>

   <div>
    
<h3 className="module-info">{userBook?.book?.description}</h3>

</div>

    
    
    <div>
    <button
    onClick={handleBookDelete}>Delete
    </button>
   
    </div>
    
   
   
    </div>



}