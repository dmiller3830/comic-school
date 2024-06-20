import { useState } from "react"
import { CreateNewModule } from "../../services/ModuleService.jsx"
import { useNavigate } from "react-router-dom"


export const CreateModule = ({currentUser}) => {
    const [newModule, setNewModule] = useState({

        name:""
    })


    const navigate = useNavigate()
    const handleCreate = (e) => {
        e.preventDefault()
        if (newModule.name )  {
            const newModuleCopy = {
                userId: currentUser.id,
                name: newModule.name
            }
            CreateNewModule(newModuleCopy)
            .then(() => {
                navigate('/modules')
            })
        }
        else {
            window.alert("Please Fill out the Form")
        }
    }

    return (
        <form>

            <h1>New Module</h1>
            <div>
                <fieldset>
                    <div>
                        <h2>Name Your Module</h2>
                        <input
                        placeholder="Name of Module"
                        type ="text"
                        onChange={(event) => {
                            const newModuleCopy = {...newModule}
                            newModuleCopy.name = event.target.value
                            setNewModule(newModuleCopy)
                        }}
                        />
                    </div>
                </fieldset>
            </div>

          
                <div>
                    <button
                    onClick={(e) => {handleCreate(e)}}>
                        Create
                    </button>
                </div>
           
        </form>
    )
}