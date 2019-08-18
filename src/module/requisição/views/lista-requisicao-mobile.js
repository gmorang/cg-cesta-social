import React from 'react';

import { Grid, Typography } from '@material-ui/core';

class RequisicaoMobile extends React.Component {
  _formatTime = time => {
    const date = new Date(time);
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('pt-br', options);
  };
  render() {
    let { row } = this.props;

    const gridStyles = {
      marginBottom: 30,
      borderRadius: 10,
      boxShadow: `1px 1px 6px ${'#d3d3d3'}`
    };
    return (
      <Grid key={row} container style={gridStyles}>
        <Grid container xs>
          <Grid container xs={6}>
            <Typography
              variant="subtitle1"
              color="secondary"
              style={{
                textTransform: 'uppercase',
                padding: 8
              }}
            >
              {row.idRequisicao}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              component="p"
              style={{
                paddingRight: 8,
                paddingTop: 8,
                float: 'right'
              }}
            >
              {this._formatTime(row.date)}
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" style={{ padding: 8 }}>
              {row.infoPessoais.nome}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1" style={this._handleStyle(row.status)}>
              {row.status}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  _handleStyle(status) {
    let aprovada = {
      color: '#60C060',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      float: 'right',
      padding: 8
    };
    let reprovada = {
      color: '#ff0000',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      float: 'right',
      padding: 8
    };
    let pendente = {
      color: '#FF700D',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      float: 'right',
      padding: 8
    };
    if (status === 'aprovada') {
      return aprovada;
    }
    if (status === 'reprovada') {
      return reprovada;
    }
    if (status === 'pendente') {
      return pendente;
    }
  }
}

export default RequisicaoMobile;
