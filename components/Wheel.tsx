import {Text, View} from 'react-native';
import React from 'react';
import {handleBackAction} from './Back';

const Wheel: React.FC<WheelProp> = ({handleBack}) => {
  handleBackAction(handleBack);

  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

export default Wheel;
