import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {store} from './redux/store';
import {Provider, useSelector} from 'react-redux';
import {Loading} from './components';
import Router from './router';

const MainApp = () => {
  const loadingState = useSelector(state => state.loading);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      {loadingState.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
