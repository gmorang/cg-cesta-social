import React from "react";
import Typography from "@material-ui/core/Typography";
import "./index.css";

//tipo e cor da letra, cor de fundo da tela//

const Titulo = ({ children, color, background }) => {
  return (
    <div
      className="titulo-pagina"
      style={
        background ? { background: "white" } : { background: "transparent" }
      }

      //tamanho da letra//
    >
      <Typography variant="h6" color={color}>
        {children}
      </Typography>
    </div>
  );
};

export default Titulo;
