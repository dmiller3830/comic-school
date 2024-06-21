import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser, getUserByEmail } from "../../services/UserService.jsx"





export const Register = (props) => {
    const [user, setUser] = useState({
      email: "",
      name: "",
      isStaff: false,
    })
    let navigate = useNavigate()
  
    const registerNewUser = () => {
      createUser(user).then((createdUser) => {
        if (createdUser.hasOwnProperty("id")) {
          localStorage.setItem(
            "comic_user",
            JSON.stringify({
              id: createdUser.id,
              staff: createdUser.isStaff,
            })
          )
  
          navigate("/")
        }
      })
    }
  
    const handleRegister = (e) => {
      e.preventDefault()
      getUserByEmail(user.email).then((response) => {
        if (response.length > 0) {
          // Duplicate email. No good.
          window.alert("Account with that email address already exists")
        } else {
          // Good email, create user.
          registerNewUser()
        }
      })
    }
  
    const updateUser = (evt) => {
      const copy = { ...user }
      copy[evt.target.id] = evt.target.value
      setUser(copy)
    }
  
    return (
      <main 
      style={{ textAlign: "center" }}>
      <form 
      className="form-login" 
      onSubmit={handleRegister}>
        <h1>Comic School</h1>
        <h2>Please Register</h2>
       
       
        
        <fieldset>
          <input
          type="text"
          id="name"
          onChange={updateUser}
          className="form-control"
          placeholder="Name"
          required
          autoFocus>
            
          
          </input>
         
          <input
          type="email"
          id="email"
          onChange={updateUser}
          className="form-control"
          placeholder="Email address"
          required
          autoFocus>
          
          </input>
         
          <div className="form-group">
            <button 
            className="login-btn btn-info" 
            type="submit">
              Register
            </button>
          </div>
          
        </fieldset>
      </form>
    </main>
     
    )
  }
  