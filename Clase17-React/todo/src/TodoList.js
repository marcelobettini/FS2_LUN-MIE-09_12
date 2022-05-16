import Todo from "./Todo"

const TodoList = ({ todos, setTodos, inputRef, setEditMode, setId, btnRef }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>uid</th>
                    <th>descripción</th>
                    <th>completa</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((tarea) => <Todo
                    key={tarea.id}
                    todo={tarea}
                    todos={todos}
                    setTodos={setTodos}
                    inputRef={inputRef}
                    btnRef={btnRef}
                    setEditMode={setEditMode}
                    setId={setId}

                />)}
            </tbody>
        </table>
    )
}
export default TodoList
