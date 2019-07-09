import React from 'react';
import { TableRow, TableCell, withStyles } from '@material-ui/core';

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});
class UserRow extends React.Component {
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
          {row.nome}
        </TableCell>
        <TableCell onClick={this.props.onClick} align="right">
          {row.cpf}
        </TableCell>
        <TableCell onClick={this.props.onClick} align="right">
          {row.telefone}
        </TableCell>
        <TableCell onClick={this.props.onClick} align="right">
          {row.bairro}
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(UserRow);
