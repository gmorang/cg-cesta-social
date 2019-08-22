import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { PieChart, Pie, Sector, Cell } from 'recharts';

import Titulo from '../../components/titulo-pagina';
import actions from '../../actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      requisicoes: null
    };
  }
  componentDidMount() {
    this.fetchUsers();
    this.fetchRequisicoes();
  }

  render() {
    let { users, requisicoes } = this.state;

    return !users || !requisicoes ? null : this.renderContent();
  }

  renderContent() {
    let { users, requisicoes } = this.state;
    console.log('listando users', users.length);
    let data = [
      {
        nome: 'Requisições Aprovadas',
        value: 50
      },
      {
        nome: 'Requisições Reprovadas',
        value: 50
      },
      {
        nome: 'Requisições Pendentes',
        value: 50
      },
      { nome: 'Usuarios', value: 53 }
    ];
    return !users || !requisicoes ? null : (
      <Grid item xs={12} style={{ marginTop: 90 }}>
        <Titulo>Dashboard</Titulo>
        <Grid container style={{ padding: 24 }}>
          <Grid item sm={6} xs={12}>
            <Grid container justify="center">
              <Grid item>
                <Typography style={{ fontWeight: 300 }} variant="h4">
                  Número de Requisições: {requisicoes.length}
                  <span style={{ fontWeight: 'bold' }}>{users.lenght}</span>
                </Typography>
              </Grid>
            </Grid>
            <PieChart width={1000} height={600} onMouseEnter={this.onPieEnter}>
              <Pie
                data={data}
                cx={300}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
              />
            </PieChart>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  fetchRequisicoes = () => {
    actions.requisicao.listaRequisicao().then(res => {
      this.setState({ requisicoes: res });
      console.log(this.state.requisicoes);
    });
  };

  fetchUsers = () => {
    actions.user.listaUsuario().then(res => {
      this.setState({ users: res });
      console.log(this.state.users);
    });
  };
}

export default Dashboard;
