import "./App.css";
import { createContext, useContext, useState } from "react";
const UserContext = createContext("");

function App() {
  const user = "Claudia";
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>
        Este es el componente App, donde reside el estado: la variable user
      </h1>
      <UserContext.Provider value={{ user, num, setNum }}>
        <Layout user={user} />
      </UserContext.Provider>
    </>
  );
}

function Layout() {
  return (
    <>
      <h2>Componente Layout</h2>
      <Header />
    </>
  );
}
function Header() {
  const { num, setNum } = useContext(UserContext);

  return (
    <>
      <h3>Componente Header</h3>
      {num}
      <button onClick={() => setNum(num - 1)}>restar</button>
      <UserInfo />
    </>
  );
}
function UserInfo() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h4>componente UserInfo</h4>
      <p>El usuario es: {user}</p>
    </>
  );
}

export default App;
