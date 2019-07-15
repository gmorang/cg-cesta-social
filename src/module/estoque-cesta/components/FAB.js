import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core';

import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
const styles = theme => ({
  root: {
    height: 380
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class FAB extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      actions: [{ icon: <FileCopyIcon />, name: 'Adicionar Cesta' }]
    };
  }

  _toggleOpen = () => {
    let { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  };
  render() {
    let { classes } = this.props;
    return (
      <div>
        <Fab
          onClick={this.props.onClick}
          className={classes.speedDial}
          aria-label="Add"
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(FAB);
