import { Link } from "react-router-dom"


export const Welcome = () => {
    return (
    
    <div className="welcome-container">

        <h1>
            
     <span>Welcome to 
    
         <span>Comics School</span>
            
    </span>
        
        </h1>

        <div>A digital tool developed to help guide students on creating their own self teaching curriculum</div>

        <button>

    <Link to='/login'>
    Login
    </Link>

</button>
        

    </div>
    
    
    )
}