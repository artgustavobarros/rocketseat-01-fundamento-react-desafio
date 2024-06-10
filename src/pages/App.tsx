import { ChangeEvent, FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Container, AddNewTask, Content, TaskList, Task, RoundedCheckBox} from "./styles"
import {PlusCircle, Trash} from "@phosphor-icons/react"
import { EmptyTaskList } from "../components/EmptyTaskList"

interface TaskProps {
  id: string
  done: boolean
  value: string
}

function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTask, setNewTask] = useState('')

  function handleNewTask(e: ChangeEvent<HTMLInputElement>){
    setNewTask(e.target.value)
  }

  function handleTasks(e: FormEvent){
    e.preventDefault()
    setTasks(state => [...state, {id:String(tasks.length), done: false, value: newTask}])
    setNewTask('')
  }

  function handleDeleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => task.value !== taskToDelete)
    setTasks(tasksWithoutDeletedOne)
  }

  function handleOnCheckedChange(taskId: string){
    setTasks(state => state.map(task => task.id === taskId ? {...task, done: !task.done}: task))
  }

  const taskCount = tasks.length
  const doneTasks = tasks.reduce((acc, current) => {
    if (current.done){
      acc++
    }
    return acc
  }, 0)
  const tasksToFinish = `${doneTasks} de ${taskCount}`
  const isNewTaskEmpty = newTask.length === 0
  
  return (
    <Container>
      <Header/>
      <Content>
      <AddNewTask onSubmit={handleTasks}>
        <input 
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTask}
        />
        <button type='submit' disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle/>
        </button>
      </AddNewTask>
        <header>
          <h2>Tarefas criadas<span>{taskCount}</span></h2>
          <h2>Concluídas<span>{tasksToFinish}</span></h2>
        </header>
        <TaskList>
          {
            tasks.length === 0 ? <EmptyTaskList/> : tasks.map(item => (
              <Task key={item.value}>
                <RoundedCheckBox>
                  <input type="checkbox" id={item.value} checked={item.done} onChange={() =>handleOnCheckedChange(item.id)}/>
                  <label htmlFor={item.value}>
                  {item.value}
                  </label>
                </RoundedCheckBox>
                <button onClick={()=>handleDeleteTask(item.value)}>
                <Trash/>
                </button>
              </Task>
            ))
          }
        </TaskList>
      </Content>
    </Container>
  )
}

export default App
