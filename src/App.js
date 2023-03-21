import './App.css';
import NavBar from './Components/NavBar';
import {AuthRoutes,UnAuthRoutes } from './routes'
import { useRoutes } from 'react-router';
function App() {
  const token =localStorage.getItem('token');
 const element = useRoutes(token ? AuthRoutes:UnAuthRoutes)
  return (
    <div>
      <NavBar />
      {element}
    </div>
  );
}

export default App;