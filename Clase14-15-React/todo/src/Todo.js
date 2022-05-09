const Todo = ({ todo }) => {
    return <li key={todo.id}>{todo.description}</li>
}
export default Todo