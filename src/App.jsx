import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <NavBar /> 
        <Routes>
          <Route path='/' element={ <ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer />} />
          <Route path='item/:idItem' element={ <ItemDetailContainer />} />
          <Route path='/cart' element={ <Cart/>} />
          <Route path='*' element={<h2>Sitio en construcción</h2>} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
    </>
    
  );
}

export default App;
