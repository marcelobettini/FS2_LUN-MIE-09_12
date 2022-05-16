// Versión pasando props desde App hasta UserInfo (prop-drilling)

import './App.css';

function App() {
  const userName = "Juan Pérez"
  return (
    <>
      <h3>Hola Mundo 🙄</h3>
      <h4>Hook useContext</h4>
      <p>¿Cómo evitar el prop-drilling?. Lo mostraremos con este ejemplo: App renderiza Layout -&gt; Layout renderiza Header -&gt; Header renderiza UserInfo y este componente es el único que realmente necesita acceder al estado.</p>

      <Layout userName={userName}>
        <h5>children</h5>
        <p>Prop especial a través de la que podemos pasar todos los elementos contenidos entre las etiquetas de apertura y cierre de un componente</p>
      </Layout>
    </>


  );
}

function Layout({ userName, children }) {
  return (
    <div style={{ border: "3px dashed", padding: '.4rem' }}>
      Componente Layout
      {children}
      <Header userName={userName} />
    </div>
  )
}
function Header({ userName }) {
  return (
    <div style={{ border: "2px dotted", padding: '.2rem' }}>
      <p>Componente Header</p>
      <UserInfo userName={userName} />
    </div>)
}

function UserInfo({ userName }) {
  return (

    <div className="child">
      <p>Componente UserInfo</p>
      <span style={{ fontWeight: 800, backgroundColor: "white", color: "tomato", padding: '.5rem' }}>User name: {userName}</span>
    </div>
  )
}
export default App;
