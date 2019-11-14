/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import Login from './Login';

const App = () => {
  const [index, setIndex] = useState(1);
  const changeIndex = (i: number) => setIndex(i);

  return (
    <Fragment>
      <Login hidden={index} />
    </Fragment>
  );
};

export default App;
