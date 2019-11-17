import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  menuActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  menu: {
    flexDirection: 'row',
    padding: 15,
  },
  item: {
    flex: 1,
    width: '100%',
  },
  fluidImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  containerHeader: {
    backgroundColor: 'white',
    padding: 5,
  },
  header: {
    fontSize: 36,
    shadowColor: 'black',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 10,
  },
  containerLogo: {
    flex: 1,
    borderWidth: 1,
  },
  logo: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
});

const Options: React.FC<Base> = () => (
    <View style={styles.item}>
      <View style={styles.menu}>
        <View style={styles.containerLogo}>
          <Image
              style={styles.logo}
              resizeMode="stretch"
              source={require('../assets/Logo_telaInicial.png')}
          />
        </View>
        <View style={styles.menuActions}>
          <Image source={require('../assets/buscar.png')}/>
          <Image source={require('../assets/config.png')}/>
        </View>
      </View>
      <View style={styles.item}>
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
      </View>
    </View>
);

export default Options;
