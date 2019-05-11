import React from "react"; //lembre se de importar o React Sempre!
// aqui importamos aquele componente que foi criado na pasta de componentes

class Home extends React.Component {
  render() {
    return (
      //aqui podemos usar o componente que criamos e uma estrutura HTML juntos
      <div>
        {/**Esse é um exemplo de estilizaçao de um componente */}
        <h4 style={{ color: "#7B68EE", marginTop: 50 }}>
          Titulo feito direto na pagina
        </h4>
      </div>
    );
  }
}

export default Home;
