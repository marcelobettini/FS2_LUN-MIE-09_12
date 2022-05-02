import './App.css';
import TodoList from './TodoList';
const App = () => {
  const todos = ["sacar la basura", "ir al cine", "barrer la verda", "sacar a pasear al perro"]
  return (
    <>
      <header>
        <h1>encabezado general de la aplicación</h1>
        <p>aquí puede ir texto o contenido que se renderizará siempre, es decir, independientemente de los demás componentes que se vayan montando en pantalla</p>
      </header>
      <TodoList todos={todos} />
    </>
  )
}

export default App;
