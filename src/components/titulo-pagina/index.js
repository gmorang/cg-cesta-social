import React from "react";
import Typography from "@material-ui/core/Typography";
import "./index.css";

const Titulo = ({ children, color, background }) => {
  return (
    <div
      className="titulo-pagina"
      style={
        background ? { background: "white" } : { background: "transparent" }
      }
    >
      <Typography variant="h6" color={color}>
        {children}
      </Typography>
    </div>
  );
};

export default Titulo;
