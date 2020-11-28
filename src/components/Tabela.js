import React from 'react';
import './Tabela';

export default class Tabela extends React.Component{
    render(){
        return(
          <div>
              {this.props.arrayProducts.map(
              row=> 

              )}
              <table classname="TabelaProducts">
                  <thead>
                  <tr>
                      <td>Id</td>
                      <td>Nome</td>
                      <td>Descrição</td>
                      <td>Foto</td> 
                      <td>Preço</td> 
                  </tr>
                  </thead>

                  <tbody><tr key="{row.id}">
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.description}</td>
                      <td>{row.photo}</td>
                      <td>{row.price}</td>
                  </tr></tbody>
              </table>
          </div>
        );
    }
}
