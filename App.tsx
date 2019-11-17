/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Login from './components/Login';
import Options from './components/Options';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
});

const App: React.FC = () => {
  const [index, setIndex] = useState(1);
  const [view, setView] = useState<JSX.Element>();

  /**
   * Avanca para a proxima tela.
   */
  const nextIndex = (): void => {
    if (index < 3) {
      setIndex(index + 1);
    }
  };

  /**
   * Volta para a ultima tela
   */
  const prevIndex = (): void => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  /**
   * Voltando com o botao do Android
   */
  const handleBack = (): boolean => {
    prevIndex();
    return true;
  };

  useEffect(() => {
    switch (index) {
      case 1:
        setView(<Login {...{nextIndex}} />);
        break;
      case 2:
        setView(<Options {...{nextIndex, prevIndex, handleBack}} />);
        break;
    }
  }, [index]);

  return <View style={styles.main}>{view}</View>;
};

export default App;
