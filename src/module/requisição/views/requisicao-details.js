import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import PersonPinCircleOutlined from '@material-ui/icons/PersonPinCircleOutlined';
import Titulo from '../../../components/titulo-pagina/';

class RequisicaoDetails extends React.Component {
  render() {
    const gridStyles = {
      borderRadius: 5,
      boxShadow: `1px 1px 6px ${'#d3d3d3'}`,
      padding: 24
    };

    const typographyStyles = {
      paddingTop: 10,
      paddingLeft: 10
    };

    const paperStyles = {
      borderRadius: 5,
      boxShadow: `1px 1px 6px ${'#d3d3d3'}`,
      padding: 24
    };
    return (
      <Grid style={{ marginTop: 90 }} item xs={12}>
        <Titulo>Detalhes</Titulo>
        <Grid style={{ padding: 24 }} style={gridStyles} item xs={12}>
          <Grid container direction="row" style={{ margin: 10 }}>
            <Typography variant="h6" style={{ textTransform: 'uppercase' }}>
              Requisicao#
            </Typography>
            <Typography variant="h6" style={{ color: '#d3d3d3' }}>
              237438
            </Typography>
          </Grid>
          <Grid container direction="row" style={{ margin: 10 }}>
            <Typography variant="h6">Gabriel Morandim</Typography>
          </Grid>
          <Divider style={{ margin: 10 }} />
          <Grid item sm={5} xs={12} style={paperStyles}>
            <Grid container direction="row">
              <Grid item sm={12} xs={12}>
                <Grid container style={{ paddingBottom: 10 }}>
                  <PersonPinCircleOutlined
                    style={{ marginRight: 10 }}
                    fontSize="large"
                  />
                  <Typography style={{ marginTop: 5 }} variant="h6">
                    Endereço
                  </Typography>
                </Grid>

                <Divider style={{ margin: 10 }} />
                <Grid container>
                  <Typography
                    style={typographyStyles}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    Rua Benedito Galdino de barros, 916
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    style={typographyStyles}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    Jarndin Brasilandia
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    style={typographyStyles}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    -
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    style={typographyStyles}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    18080-445
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item sm={5} xs={12} style={paperStyles}>
              <Grid container direction="row">
                <Grid item sm={12} xs={12}>
                  <Grid container style={{ paddingBottom: 10 }}>
                    <PersonPinCircleOutlined
                      style={{ marginRight: 10 }}
                      fontSize="large"
                    />
                    <Typography style={{ marginTop: 5 }} variant="h6">
                      Renda
                    </Typography>
                  </Grid>

                  <Divider style={{ margin: 10 }} />
                  <Grid container>
                    <Typography
                      style={typographyStyles}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      Profissao
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Typography
                      style={typographyStyles}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      Renda Familiar
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Typography
                      style={typographyStyles}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      Renda Pessoal
                    </Typography>
                  </Grid>
                  <Grid container>
                    <Typography
                      style={typographyStyles}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      Situacao
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default RequisicaoDetails;
