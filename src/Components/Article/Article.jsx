import React from "react";

import './article.css';

export class Article extends React.Component {
    render(){
        return(
            <article id="article">
                <img src={this.props.imagem} alt="" />
            <div className="article-infos">
                
                <h2>{this.props.title}</h2>
                <h3>{this.props.provider}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur itaque repudiandae,m mollitia, rem nostrum dolores aut libero minus excepturi fuga obcaecati, dolor qui unde optio.</p>

            </div>
        </article>
        )
       
    }
}