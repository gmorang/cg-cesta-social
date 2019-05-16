import React from "react"; //lembre se de importar o React Sempre!
// aqui importamos aquele componente que foi criado na pasta de componentes

class Home extends React.Component {
  render() {
    return (
      <div
        className="dzsparallaxer auto-init height-is-based-on-content "
        data-options='{   direction: "reverse"}'
      >
        <div className="divimage dzsparallaxer--target " />

        <div className="container pt100 pb70">
          <div class="row pb50">
            <div
              className="col-md-8 ml-auto mr-auto wow bounceIn"
              data-wow-delay=".2s"
            >
              <h3 class="h1 text-center font300  pt100 text-white">
                Header - Login Form
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
