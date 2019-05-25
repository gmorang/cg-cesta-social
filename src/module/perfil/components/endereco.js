import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import PersonPinCircleOutlined from "@material-ui/icons/PersonPinCircleOutlined";
import { Divider } from "@material-ui/core";

class Endereco extends React.Component {
  render() {
    const typographyStyles = {
      paddingTop: 10,
      paddingLeft: 10
    };
    return (
      <div>
        <Grid container xs={12} style={{ paddingBottom: 10 }}>
          <PersonPinCircleOutlined
            style={{ marginRight: 10 }}
            fontSize="large"
          />
          <Typography style={{ marginTop: 5 }} variant="h6">
            Endereço
          </Typography>
        </Grid>

        <Divider style={{ margin: 10 }} />
        <Grid container xs={12}>
          <Typography
            style={typographyStyles}
            variant="subtitle1"
            color="textSecondary"
          >
            Rua teste
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Typography
            style={typographyStyles}
            variant="subtitle1"
            color="textSecondary"
          >
            Bairro
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Typography
            style={typographyStyles}
            variant="subtitle1"
            color="textSecondary"
          >
            Complemento
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Typography
            style={typographyStyles}
            variant="subtitle1"
            color="textSecondary"
          >
            CEP
          </Typography>
        </Grid>
      </div>
    );
  }
}

export default Endereco;
