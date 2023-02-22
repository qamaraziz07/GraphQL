import './App.css';
import NavBar from './Components/NavBar';
import {routes } from './routes'
import { useRoutes } from 'react-router';
function App() {
 const element = useRoutes(routes)
  return (
    <div>
      <NavBar />
      {element}
    </div>
  );
}

export default App;