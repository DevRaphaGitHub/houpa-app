import React from 'react';
import './App.css';
import Tabela from './components/Tabela';

export default class App extends React.Component{

  constructor(){
      super();
      this.state=({
          db: []
      });
      this.showProducts();
  }

  showProducts(){
      fetch("http://localhost/houpa-app/src/api/")
      .then((response)=>response.json())
      .then((responseJson)=>
      {
          this.setState({
              db: responseJson
          });
      })
  }

  render(){
      return(
        <div>
            <Tabela arrayProducts="{this.state.db}"></Tabela>
      </div>
      );
  }
}