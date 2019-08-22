import React from 'react';
import { TableRow, TableCell, withStyles } from '@material-ui/core';

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});
class RequisicaoRow extends React.Component {
  _formatTime = time => {
    const date = new Date(time);
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('pt-BR', options);
  };
  render() {
    let { row, classes } = this.props;
    return (
      <TableRow className={classes.row}>
        <TableCell
          align="center"
          onClick={this.props.onClick}
          scope="row"
          style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}
        >
          {row.idRequisicao}
        </TableCell>
        <TableCell onClick={this.props.onClick} align="right">
          {this._formatTime(row.date)}
        </TableCell>
        <TableCell onClick={this.props.onClick} align="right">
          {row.infoPessoais.nome}
        </TableCell>
        <TableCell
          onClick={this.props.onClick}
          align="right"
          style={this._handleStyle(row.status)}
        >
          {row.status}
        </TableCell>
      </TableRow>
    );
  }
  _handleStyle(status) {
    let aprovada = {
      color: '#60C060',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    };
    let reprovada = {
      color: '#ff0000',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    };
    let pendente = {
      color: '#FF700D',
      fontWeight: 'bold',
      textTransform: 'uppercase'
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

export default withStyles(styles)(RequisicaoRow);
