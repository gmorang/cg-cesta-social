import React from "react";
import { TableRow, TableCell, withStyles } from "@material-ui/core";

const styles = theme => ({
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});
class RequisicaoRow extends React.Component {
  _formatTime = time => {
    const date = new Date(time);
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return date.toLocaleDateString("pt-BR", options);
  };
  render() {
    let { row, classes } = this.props;
    return (
      <TableRow className={classes.row}>
        <TableCell
          onClick={this.props.onClick}
          scope="row"
          style={{ textTransform: "uppercase", fontWeight: "bolder" }}
        >
          {row.idRequisicao}
        </TableCell>
        <TableCell onClick={this.props.onClick} align="right">
          {this._formatTime(row.data)}
        </TableCell>
        <TableCell onClick={this.props.onClick} align="right">
          {row.nome}
        </TableCell>
        <TableCell
          onClick={this.props.onClick}
          align="right"
          style={{ textTransform: "uppercase" }}
        >
          {row.status}
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(RequisicaoRow);
