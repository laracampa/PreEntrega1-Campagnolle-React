import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const nombre = "React";
  return (
    <>
    <BrowserRouter>
    <NavBar /> 
      <Routes>
        <Route path='/' element={ <ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={ <ItemListContainer />} />
        <Route path='item/:idItem' element={ <ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
