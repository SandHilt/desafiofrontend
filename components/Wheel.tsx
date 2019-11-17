import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {handleBackAction} from './Back';
import Menu from './Menu';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  wheel: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBackButton: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  backButton: {
    justifyContent: 'flex-start',
  },
});

const Wheel: React.FC<WheelProp> = ({prevIndex, handleBack}) => {
  handleBackAction(handleBack);

  return (
    <View style={styles.wrapper}>
      <Menu {...{prevIndex}} />
      <ImageBackground
        resizeMode="contain"
        style={styles.wheel}
        source={require('../assets/roleta.png')}>
        <TouchableOpacity style={styles.wheel}>
          <ImageBackground
            resizeMode="contain"
            style={styles.wheel}
            source={require('../assets/indicador_0_roleta.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity>
        <Image
          style={styles.backButton}
          source={require('../assets/bt_voltar.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Wheel;
