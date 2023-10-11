import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1></h1>
      <ItemListContainer greeting={"Bienvenidos a mi tienda"}/>
    </div>
  );
}

export default App;

