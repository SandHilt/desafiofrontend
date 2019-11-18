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
import Wheel from './components/Wheel';

import includes from 'lodash/includes';
import Question from './components/Question';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
});

/**
 * Sumario com os indices
 */
const Summary = new Map([
  ['Login', 1],
  ['Options', 2],
  ['Wheel', 3],
  ['Question', 4],
]);

const App: React.FC = () => {
  const [index, setIndex] = useState(1);
  const [view, setView] = useState<JSX.Element>();

  const [questionId, setQuestionId] = useState(1);

  /**
   * Checa se o valor esta no sumario
   * @param value valor do indice
   */
  const hasValueInSummary = (value: number): boolean => {
    const values = Array.from(Summary.values());
    return includes(values, value);
  };

  /**
   * Avanca para a proxima tela.
   */
  const nextIndex = (): void => {
    const next = index + 1;
    if (hasValueInSummary(next)) {
      setIndex(next);
    }
  };

  /**
   * Avancar para a proxima questao
   */
  const nextQuestion = (): void => setQuestionId(questionId + 1);

  /**
   * Volta para a tela anterior
   */
  const prevIndex = (): void => {
    const previous = index - 1;

    if (hasValueInSummary(previous)) {
      setIndex(previous);
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
      case Summary.get('Login'):
        setView(<Login {...{nextIndex}} />);
        break;
      case Summary.get('Options'):
        setView(<Options {...{nextIndex, prevIndex, handleBack}} />);
        break;
      case Summary.get('Wheel'):
        setView(<Wheel {...{prevIndex, nextIndex, handleBack}} />);
        break;
      case Summary.get('Question'):
        setView(<Question questionIndex={questionId} themeIndex={0} />);
        break;
    }
  }, [index]);

  return <View style={styles.main}>{view}</View>;
};

export default App;
