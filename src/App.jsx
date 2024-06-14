import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";



//Componete em classe e uma classe que herda a classe componete do react
//e retorna html dentro do metodo render 
class App  extends React.Component {
  //metodo responsavel por renderizar o html da aplicação
  
  render() {
    return (
      <Navbar/>
    );
  }
  
}

export default App;