// Versión utilizando el hook useContext, permite acceder al estado de App desde cualquier componente, sin pasar props
import './App.css';
import { createContext, useContext } from "react"
const UserCtx = createContext()

function App() {
  const userName = "Juan Pérez"

  return (
    <>
      <h3>Hola Mundo 🙄</h3>
      <h4>Hook useContext</h4>
      <p>¿Cómo evitar el prop-drilling?. Lo mostraremos con este ejemplo: App renderiza Layout -&gt; Layout renderiza Header -&gt; Header renderiza UserInfo y este componente es el único que realmente necesita acceder al estado.</p>
      <UserCtx.Provider value={userName}>
        <Layout userName={userName}>
          <h5>children</h5>
          <p>Prop especial a través de la que podemos pasar todos los elementos contenidos entre las etiquetas de apertura y cierre de un componente</p>
        </Layout>
      </UserCtx.Provider>
    </>
  );
}

function Layout({ children }) {
  return (
    <div style={{ border: "3px dashed", padding: '.4rem' }}>
      Componente Layout
      {children}
      <Header />
    </div>
  )
}
function Header() {
  return (
    <div style={{ border: "2px dotted", padding: '.2rem' }}>
      <p>Componente Header</p>
      <UserInfo />
    </div>)
}

function UserInfo() {
  const userName = useContext(UserCtx)
  return (

    <div className="child">
      <p>Componente UserInfo</p>
      <span style={{ fontWeight: 800, backgroundColor: "white", color: "tomato", padding: '.5rem' }}>User name: {userName}</span>
    </div>
  )
}
export default App;
