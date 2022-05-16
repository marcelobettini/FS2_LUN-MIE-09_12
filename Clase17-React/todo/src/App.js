import { v4 as uuid } from "uuid"
import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import { Container, Row, Button, Form, FormControl, FloatingLabel } from
  "react-bootstrap"
const App = () => {

  const [todos, setTodos] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState(null)
  const inputRef = useRef()
  const btnRef = useRef()



  const handleInputTodo = () => {
    const description = inputRef.current.value
    if (description === "") return;
    if (!editMode) {
      const newTodo = {
        id: uuid(),
        description,
        completed: false
      }
      setTodos(prevState => [...prevState, newTodo])
      inputRef.current.value = null
    } else {
      const arrEdit = todos.map((tarea) => tarea.id === id ? { ...tarea, description: inputRef.current.value } : tarea)
      setTodos(arrEdit)
      setEditMode(false)
      btnRef.current.innerText = "agregar tarea"
      inputRef.current.value = null
    }

  }

  const deleteCompleted = () => {
    //tenemos el estado (todos), necesitamos recorrerlo y crear una nueva copia
    //(el nuevo estado) que contenga solamente los elementos cuya prop "completed" tenga el valor false
    setTodos(todos.filter((tarea) => tarea.completed === false)) //!tarea.completed
  }

  return (
    <Container>

      <header className='mb-5'>
        <h1>encabezado general de la aplicación</h1>
        <p>aquí puede ir texto o contenido que se renderizará siempre, es decir, independientemente de los demás componentes que se vayan montando en pantalla</p>
      </header>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row className="align-items-center justify-content-center text-capitalize">
          <Form.Group className="col-12 col-lg-8">
            <FloatingLabel controlId="floatingInput" label="Descripción">
              <FormControl ref={inputRef} type="text" placeholder="Nueva tarea..." />
            </FloatingLabel>
          </Form.Group>

          <Button ref={btnRef} onClick={handleInputTodo} size="sm" variant="success" className="mt-4 w-50">agregar tarea</Button>
          <Button size="sm" variant="danger" className="m-2 w-50" onClick={deleteCompleted}>eliminar competas</Button>
        </Row>
      </Form>
      <section>
        <h4>Lista de tareas</h4>
        <ul>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            inputRef={inputRef}
            btnRef={btnRef}
            setEditMode={setEditMode}
            setId={setId}

          />
        </ul>
      </section>
    </Container >
  )
}

export default App;
