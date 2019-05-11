/**Aqui vou criar um componente de titulo e vou importar em uma pagina de exemplo */

import React from "react"; //sempre importamos primeiro o React, que e a biblioteca



/**isso abaixo é uma classe, vamos usar isso para criar tudo no React, pode ser pagina ou component
 * se voces usarem o Visual Studio Code e as extensoes que mandei no video no grupo, isso vai ser bem facil de criar
 * ele vai te ajudar a fazer a classe, e ir auto completando
 */



class Title extends React.Component {

  

  render() {
    return (
      //aqui dentro, colocamos uma estrutura HTML norma
      <div>
        
        <h3>Teste de Titulo</h3>
      </div>
    );
  }
}

export default Title; // aqui exportamos noss componente que criamos, será sempre dessa forma
