import { Outlet } from 'react-router-dom';
import './App.css'; // Make sure this file exists

function App() {
  return (
    <main>
      <Outlet /> {/* Render child routes here */}
    </main>
  );
}

export default App;
