import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  const styles = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={styles}>
      <CircularProgress style={{ color: '#cccccc' }} />
    </div>
  );
};

export default Loading;
