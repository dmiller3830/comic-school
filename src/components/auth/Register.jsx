import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser, getUserByEmail } from "../../services/UserService.jsx"





export const Register = (props) => {
    const [customer, setCustomer] = useState({
      email: "",
      fullName: "",
      isStaff: false,
    })
    let navigate = useNavigate()
  
    const registerNewUser = () => {
      createUser(customer).then((createdUser) => {
        if (createdUser.hasOwnProperty("id")) {
          localStorage.setItem(
            "honey_user",
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
      getUserByEmail(customer.email).then((response) => {
        if (response.length > 0) {
          // Duplicate email. No good.
          window.alert("Account with that email address already exists")
        } else {
          // Good email, create user.
          registerNewUser()
        }
      })
    }
  
    // const updateCustomer = (evt) => {
    //   const copy = { ...customer }
    //   copy[evt.target.id] = evt.target.value
    //   setCustomer(copy)
    // }
  
    return (
      <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Comic School</h1>
        <h2>Please Register</h2>
       
       
        
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
     
    )
  }
  