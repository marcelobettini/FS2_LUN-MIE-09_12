import { Button } from 'react-bootstrap'
const Todo = ({ todo, todos, setTodos, inputRef, setEditMode, setId, btnRef }) => {
    const toggleCompleted = () => {
        setTodos(
            todos.map((tarea) => {
                if (tarea.id === todo.id) {
                    return { ...tarea, completed: !tarea.completed }
                }
                return tarea
            })
        )
    }

    const setForEdit = () => {
        setEditMode(true)
        setId(todo.id)
        inputRef.current.value = todo.description
        btnRef.current.innerText = "cambiar tarea"
    }
    return (
        <tr>
            <td>{todo.id} </td>
            <td>{todo.description} </td>
            <td>{todo.completed ? "si" : "no"}</td>
            <td><Button className='btn-sm btn-warning' onClick={toggleCompleted}>marcar</Button></td>
            <td><Button className='btn-sm btn-success' onClick={setForEdit}>editar</Button></td>
        </tr>
    )
}
export default Todo