import React from 'react';
import Wrapper from './routes';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Wrapper />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
