const TodoList = ({ todos }) => {
    return (
        <section>
            <h4>Lista de tareas</h4>
            <ol>
                {todos.map(tarea => <li key={tarea}>{tarea}</li>)}
            </ol>
        </section>
    )
}
export default TodoList
