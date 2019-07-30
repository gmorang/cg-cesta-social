import React from 'react';
import {
  DialogTitle,
  DialogContent,
  Grid,
  Button,
  FormControl,
  TextField
} from '@material-ui/core';

import { InlineDatePicker } from 'material-ui-pickers';

class DialogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      dataRetirada: new Date()
    };
  }

  _handleDataRetirada = text => {
    this.setState({
      dataRetirada: text
    });
    console.log(this.state.dataRetirada);
  };

  _handleMessage = text => {
    this.setState({
      message: text.currentTarget.value
    });
    console.log(this.state.message);
  };
  render() {
    const { reprova, aprova } = this.props;
    const { dataRetirada, message } = this.state;
    console.log(this.props);
    return (
      <div>
        <DialogTitle>Você deseja aprovar essa requisição?</DialogTitle>
        <DialogContent>
          <Grid item xs={12}>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="standard-multiline-flexible"
                label="Mensagem"
                multiline
                rowsMax="4"
                value={this.state.message}
                onChange={this._handleMessage}
                margin="normal"
              />
            </FormControl>
            <InlineDatePicker
              onlyCalendar
              label="Data Retirada"
              helperText="No year selection"
              value={this.state.dataRetirada}
              onChange={this._handleDataRetirada}
            />
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={styles.submit}
                onClick={aprova}
              >
                Aprovar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={styles.danger}
                onClick={reprova}
              >
                Reprovar
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </div>
    );
  }
}

const styles = {
  submit: {
    backgroundColor: '#131112',
    float: 'right',
    marginLeft: 10
  },
  danger: {
    backgroundColor: '#ff0000',
    float: 'right'
  }
};
export default DialogForm;
