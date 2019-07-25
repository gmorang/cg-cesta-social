import React from 'react';
import { DialogTitle, DialogContent, Grid, Button } from '@material-ui/core';
class DialogForm extends React.Component {
  render() {
    const { reprova, aprova } = this.props;
    console.log(this.props);
    return (
      <div>
        <DialogTitle>Você deseja aprovar essa requisição?</DialogTitle>
        <DialogContent>
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
