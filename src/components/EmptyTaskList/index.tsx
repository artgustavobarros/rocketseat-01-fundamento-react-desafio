import { Container } from "./styles";
import EmptyClipboard from "../../assets/empty-clipboard.svg?react"

export function EmptyTaskList(){
  return(
    <Container>
      <EmptyClipboard/>
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </Container>
  )
}
