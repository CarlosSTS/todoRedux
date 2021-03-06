import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux'
import Routes from './src/routes';

import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#000" barStyle="light-content" translucent />
      <Routes />
    </Provider>
  )
}

export default App;