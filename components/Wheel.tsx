import {
  Alert,
  Animated,
  Easing,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {handleBackAction} from './Back';
import Menu from './Menu';
import rand from 'lodash/random';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgb(2,0,36)',
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
  const [spinValue] = useState(new Animated.Value(0));
  const [animated, setAnimated] = useState(false);

  const finalPosition = rand(14, 21);

  /**
   * Gerenciando o spin
   */
  const handleAnimation = (): void => {
    if (!animated) {
      Animated.timing(spinValue, {
        toValue: finalPosition,
        duration: 7000,
        easing: Easing.inOut(Easing.ease),
        delay: 1,
      }).start(() => {
        /**
         * TODO Chamar a pagina de pergunta
         */
        Alert.alert('Terminou', `Terminou com o valor ${finalPosition}`);
      });
      setAnimated(true);
    }
  };

  /**
   * Estilo para rodar o spin
   */
  const animationProp = {
    flex: 1,
    width: '100%',
    zIndex: -1,
    transform: [
      {
        rotateZ: spinValue.interpolate({
          inputRange: [0, 7],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.wrapper}>
      <Menu {...{prevIndex}} />

      <TouchableOpacity
        disabled={animated}
        style={styles.wheel}
        onPress={handleAnimation}>
        <ImageBackground
          resizeMode="contain"
          style={styles.wheel}
          source={require('../assets/indicador_0_roleta.png')}>
          <ImageBackground
            resizeMode="contain"
            style={styles.wheel}
            source={require('../assets/indicador_1_roleta.png')}>
            <Animated.Image
              style={animationProp}
              resizeMode="contain"
              source={require('../assets/roleta.png')}
            />
          </ImageBackground>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={prevIndex}>
        <Image
          style={styles.backButton}
          source={require('../assets/bt_voltar.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Wheel;
