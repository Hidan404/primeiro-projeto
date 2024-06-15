import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { Article } from "./Components/Article/Article";
import vibrant from './Assets/img/vibrant.jpg';
import malayamlam from './Assets/img/malayalam.jpg';
import articleimg from './Assets/img/dashboards.avif'
import { Counter } from "./Components/Counter/Counter";




//Componete em classe e uma classe que herda a classe componete do react
//e retorna html dentro do metodo render 
class App  extends React.Component {
  //metodo responsavel por renderizar o html da aplicação
  
  render() {
    return (
      (<>
      <Navbar/>
      <section id="articles">
        <Article title="Designing DashBoards" provider="NASA" imagem={articleimg} />
        <Article title="Vibrant Portraits of 2020" provider="SpaceNews" imagem={vibrant} />
        <Article title="Designing DashBoards" provider="NASA" imagem={articleimg} />
        <Article title="36 days malaylam type" provider="SpaceFlight Now" imagem={malayamlam} />
      </section>
      <Counter/>
      </>)
    );
  }
  
}

export default App;