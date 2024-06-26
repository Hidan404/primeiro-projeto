import { render } from "@testing-library/react";
import React from "react";

export class Counter extends React.Component{
    constructor(){
        super();
       // this.contador = 0;
       this.state = {contador: 0, name: ''};
    }

    render(){
        return(
            <div style={{marginLeft: "4rem",marginTop: "4rem"}}>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={()=> {
                        this.setState({contador: this.state.contador + 1})
                    }} >Aumentar</button>
                    <button onClick={()=> {
                        this.setState({contador: this.state.contador - 1})
                    }} >Diminuir</button>
                </div>

                <form action="">
                    <label htmlFor="">nome</label>
                    <input type="text" value={this.state.name} onChange={(event)=> {
                        this.setState({name: event.target.value})
                    }} />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
       
}