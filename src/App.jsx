import { Outlet } from 'react-router-dom';
import './App.css'; // Make sure this file exists

function App() {
  return (
    <main>
      <Outlet /> 
    </main>
  );
}

export default App;
