import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar.jsx"
import { Welcome } from "../components/Welcome/Welcome.jsx"
import { Login } from "../components/auth/Login.jsx"
import { Register } from "../components/auth/Register.jsx"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { BookList } from "../components/Books/Books.jsx"
import { AssignmentList } from "../components/Assignments/Assignments.jsx"
import { ModuleList } from "../components/Modules/Module.jsx"
// import { AddBook } from "../components/Add And Create/AddBook.jsx"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})
  
  
  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObj = JSON.parse(localHoneyUser)
  
    setCurrentUser(honeyUserObj)
  }, [])
  
    return <>

    <Routes>
        <Route
            path="/" element={<>
            <NavBar />
            <Outlet />
            
            </>
        }>
        <Route 
        index element={<Welcome></Welcome>}/>
      <Route path="login">
                    <Route index element={<Login />} />
                </Route>

                <Route path="register">
                    <Route index element={<Register />} />
                </Route>

                <Route path="dashboard">
                    <Route index element={<Dashboard />}/>
                 
                </Route>

                <Route path="books">
                <Route index element ={<BookList currentUser={currentUser}/>}/>  
        </Route>

        <Route path="assignments">
                <Route index element ={<AssignmentList currentUser={currentUser}/>}/>  
        </Route> 

         {/* <Route path="addtomodule" element={<AddBook currentUser={currentUser}/>}/>   */}

         <Route path="module">
               <Route index element ={<ModuleList currentUser={currentUser}/>}/>
         </Route>


        </Route>

        


      </Routes>

      
    
    
    
    </>


}

      

        



