/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Login from './components/Login';
import Options from './components/Options';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
});

const App = () => {
  const [index, setIndex] = useState(2);
  const [view, setView] = useState(null);
  const nextIndex = () => setIndex(index + 1);

  useEffect(() => {
    switch (index) {
      case 1:
        setView(<Login {...{nextIndex}} />);
        break;
      case 2:
        setView(<Options {...{nextIndex}} />);
        break;
    }
  }, [index]);

  return <View style={styles.main}>{view}</View>;
};

export default App;
