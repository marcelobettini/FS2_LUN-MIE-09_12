import { v4 as uuid } from "uuid"
import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import { Container, Row, Button, Form, FormControl } from
  "react-bootstrap"
const App = () => {

  const [todos, setTodos] = useState([])
  const inputRef = useRef()
  const handleInputTodo = () => {
    const newTodo = {
      id: uuid(),
      description: inputRef.current.value,
      completed: false
    }
    setTodos(prevState => [...prevState, newTodo])
    inputRef.current.value = null
  }
  return (
    <Container>

      <header className='mb-5'>
        <h1>encabezado general de la aplicación</h1>
        <p>aquí puede ir texto o contenido que se renderizará siempre, es decir, independientemente de los demás componentes que se vayan montando en pantalla</p>
      </header>
      <Form>
        <Row className="align-items-center justify-content-center text-capitalize">
          <FormControl ref={inputRef} type="text" placeholder="Nueva tarea..." />
          <Button onClick={handleInputTodo} size="sm" variant="success" className="mt-4 w-50">agregar tarea</Button>
          <Button size="sm" variant="danger" className="m-2 w-50">eliminar competas</Button>
        </Row>
      </Form>
      <section>
        <h4>Lista de tareas</h4>
        <ul>
          <TodoList todos={todos} />
        </ul>
      </section>
    </Container >
  )
}

export default App;
