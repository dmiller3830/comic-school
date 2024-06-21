import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar.jsx"
import { Welcome } from "../components/Welcome/Welcome.jsx"
import { Login } from "../components/auth/Login.jsx"
import { Register } from "../components/auth/Register.jsx"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { BookList } from "../components/Books/Books.jsx"
import { AssignmentList } from "../components/Assignments/Assignments.jsx"
import { ModuleList } from "../components/Modules/ModuleList.jsx"
import { CreateModule } from "../components/Modules/CreateModule.jsx"
import { ModuleDetails } from "../components/Modules/ModulesDetails.jsx"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})
  
  
  useEffect(() => {
    const localcomicUser = localStorage.getItem("comic_user")
    const comicUserObj = JSON.parse(localcomicUser)
  
    setCurrentUser(comicUserObj)
  }, [])
  
    return <>

    <Routes>

    <Route 
        index element={<Welcome></Welcome>}/>

<Route path="login">
                    <Route index element={<Login />} />
                </Route>

                <Route path="register">
                    <Route index element={<Register/>} />
                </Route>
      
      
        <Route
            path="/" element={<>
            <NavBar />
            <Outlet />
            
            </>
        }>
        <Route 
        index element={<Welcome></Welcome>}/>
      

                <Route path="dashboard">
                    <Route index element={<Dashboard />}/>
                 
                </Route>

                <Route path="books">
                <Route index element={<BookList currentUser={currentUser}/>}/>  
        </Route>

        <Route path="assignments">
                <Route index element={<AssignmentList currentUser={currentUser}/>}/>  
        </Route> 

         {/* <Route path="addtomodule" element={<AddBook currentUser={currentUser}/>}/>   */}

         <Route path="modules">
               <Route index element={<ModuleList currentUser={currentUser}/>}/>
               <Route path="create" element={<CreateModule currentUser={currentUser}/>}/>
               <Route path=":userId" element={<ModuleDetails/> } />
         </Route>


        </Route>

        


      </Routes>

      
    
    
    
    </>


}

      

        




