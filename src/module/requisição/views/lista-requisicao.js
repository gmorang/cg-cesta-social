import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Hidden,
  Grid
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

import RequisicaoRow from "../components/rquisicao-row";
import actions from "../../../actions/";
import Titulo from "../../../components/titulo-pagina";

class Requisicoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requisicoes: [
        {
          data: "2019-05-16",
          idRequisicao: "1234567",
          nome: "Gabriel Morandim",
          status: "aprovado"
        },
        {
          data: "2019-06-10",
          idRequisicao: "56165131",
          nome: "Ronaldo Nasario",
          status: "pendente"
        },
        {
          data: "2019-01-15",
          idRequisicao: "65561615",
          nome: "Maria Antonieta",
          status: "recusado"
        },
        {
          data: "2019-01-15",
          idRequisicao: "56123211",
          nome: "Paulo Nunes",
          status: "aprovado"
        },
        {
          data: "2019-03-15",
          idRequisicao: "54230020",
          nome: "Socratis",
          status: "aprovado"
        },
        {
          data: "2018-12-12",
          idRequisicao: "365464",
          nome: "Bebeto",
          status: "aprovado"
        },
        {
          data: "2019-01-15",
          idRequisicao: "56156156",
          nome: "Walter Casagrande",
          status: "aprovado"
        }
      ]
    };
  }

  componentDidMount() {
    this.fetchRequisicoes();
  }

  render() {
    return (
      <Grid item xs={12} style={{ marginTop: 90 }}>
        <Titulo>Requisicoes</Titulo>
        <Grid iitem xs={12} style={{ padding: 10 }}>
          <Hidden xsDown>
            <Paper style={{ padding: 20 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Numero da Requisição</TableCell>
                    <TableCell align="right">Data</TableCell>
                    <TableCell align="right">Nome</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.requisicoes.map(row => {
                    return (
                      <RequisicaoRow
                        key={row.idRequisicao}
                        row={row}
                        onClick={() => this.handleClicked(row)}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Hidden>
        </Grid>
      </Grid>
    );
  }

  fetchRequisicoes() {
    actions.requisicao.listaRequisicao().then(data => {
      console.log(data);
    });
  }

  handleClicked = row => {
    this.props.history.push({
      pathname: "/teste",
      state: { loadedInvoice: row }
    });
  };
}

export default withRouter(Requisicoes);
