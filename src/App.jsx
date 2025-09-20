import { useEffect, useState } from "react";
import Tasks from "./components/Task";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import {v4} from 'uuid';

function App() {

  // states (estado)
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] 
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect( () => {
    // const fetchTasks = async () => {
      // chamar a api
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
    //   {
    //   method: 'GET'
    //   }
    // );
    
    // pegar os dados da api que ela retorna
    // const data = await response.json()

    // armazenar/persistir esses dados no state
    // setTasks(data);
    // }
  // fetchTasks();
  },[])
  
  function onTaskClick(taskId) {
    const newTask = tasks.map(task => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })
    // NÃO PRECISA ATUALIZAR ESSA TAREFA
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter(task => task.id  !== taskId);
    setTasks(newTask);
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description:  description,
      isCompleted: false,
      
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
          <Title>
            Gerenciador de tarefas
          </Title>
          <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;