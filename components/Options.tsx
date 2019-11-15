import React from 'react';
import {ImageBackground, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {flex: 1},
  menuActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row: {flexDirection: 'row'},
  fluidImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

const Options: React.FC<Options> = () => {
  // const menu = (
  //   <View style={styles.row}>
  //     <Image
  //
  //       resizeMode="center"
  //       source={require('../assets/Logo_telaInicial.png')}
  //     />
  //     <View style={styles.menuActions}>
  //       <Image source={require('../assets/buscar.png')} />
  //       <Image source={require('../assets/config.png')} />
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.item}>
      <View style={styles.item}>
        <ImageBackground
          style={styles.fluidImage}
          source={require('../assets/Img_principal_0.png')}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            tenetur iusto ipsam, nesciunt exercitationem debitis eligendi neque!
            Officia quibusdam perspiciatis error illo unde harum atque rem?
            Nihil atque repudiandae dignissimos.
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.item}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.fluidImage}
          source={require('../assets/Img_principal_1.png')}>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            alias harum eum, distinctio quibusdam culpa assumenda rem voluptatum
            amet earum tempore et doloremque voluptate ullam veritatis veniam
            dolore corporis optio.
          </Text>
        </ImageBackground>
        {/* <Image source={require('../assets/Img_principal_2.png')} /> */}
      </View>
    </View>
  );
};

export default Options;
