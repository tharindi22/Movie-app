import { Outlet } from 'react-router-dom';
import './App.css'; // Make sure this file exists
import Header from './components/Header';

function App() {
  return (
    <main>
      <Header />
      <Outlet /> 
      <footer />
    </main>
  );
}

export default App;
