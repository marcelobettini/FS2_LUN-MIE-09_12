import "./App.css";

function App() {
  const user = "usuario pepe";
  return (
    <>
      <h1>
        Este es el componente App, donde reside el estado: la variable user
      </h1>
      <Layout user={user} />
    </>
  );
}

function Layout({ user }) {
  return (
    <>
      <h2>Componente Layout</h2>
      <Header user={user} />
    </>
  );
}
function Header({ user }) {
  return (
    <>
      <h3>Componente Header</h3>
      <UserInfo user={user} />
    </>
  );
}
function UserInfo({ user }) {
  return (
    <>
      <h4>componente UserInfo</h4>
      <p>El usuario es: {user}</p>
    </>
  );
}

export default App;
