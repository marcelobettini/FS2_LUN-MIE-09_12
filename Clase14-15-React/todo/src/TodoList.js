import Todo from "./Todo"

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map((tarea) => <Todo todo={tarea} />)}
        </div>
    )
}
export default TodoList
