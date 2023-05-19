import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const nombre = "React";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¿Qué te gustaría probar hoy?" />
      <ItemDetailContainer />
    </>
    
  );
}

export default App;
