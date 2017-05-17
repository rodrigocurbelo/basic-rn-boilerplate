import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import SimpleApp from './Navigator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SimpleApp />
      </Provider>
    );
  }
}

export default App;
