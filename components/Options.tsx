import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {handleBackAction} from './Back';
import Menu from './Menu';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  containerImages: {
    flex: 1,
    width: '100%',
    maxWidth: 768,
  },
  fluidImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  containerHeader: {
    backgroundColor: 'rgba(255,255,255,.5)',
    padding: 15,
  },
  header: {
    fontSize: 36,
    shadowOpacity: 10,
  },
  gameContainer: {
    backgroundColor: 'black',
    height: 200,
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  gameText: {
    fontSize: 36,
    color: 'white',
  },
});

const Options: React.FC<OptionsProp> = ({prevIndex, nextIndex, handleBack}) => {
  handleBackAction(handleBack);

  return (
    <View style={styles.wrapper}>
      <Menu {...{prevIndex}} />
      <View style={styles.containerImages}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.fluidImage}
          source={require('../assets/Img_principal_0.png')}>
          <View style={styles.containerHeader}>
            <Text style={styles.header}>CORP</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          resizeMode="stretch"
          style={styles.fluidImage}
          source={require('../assets/Img_principal_1.png')}>
          <View style={styles.containerHeader}>
            <Text style={styles.header}>DMD</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          resizeMode="stretch"
          style={styles.fluidImage}
          source={require('../assets/Img_principal_2.png')}>
          <View style={styles.containerHeader}>
            <Text style={styles.header}>haTTR</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.gameContainer}
          source={require('../assets/icone_bt_jogar.png')}>
          <TouchableOpacity onPress={nextIndex}>
            <Text style={styles.gameText}>Let's game</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Options;
