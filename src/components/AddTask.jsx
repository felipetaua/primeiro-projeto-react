import { useState } from "react";
import Input from "./input.jsx"


function AddTask({ onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input 
                type="text" 
                placeholder="Título da tarefa" 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input 
                type="text" 
                placeholder="Descrição da tarefa" 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button 
                onClick={() => {
                    // verificar se os campos estão preenchido
                    if (!title || !description){
                        return alert("Preencha todos os campos")
                    }
                    onAddTaskSubmit(title, description)
                    setTitle("")
                    setDescription("")
                }}
                className="bg-slate-400 px-4 py-2 rounded-md text-white">Adicionar</button>
        </div>
    )
}

export default AddTask;