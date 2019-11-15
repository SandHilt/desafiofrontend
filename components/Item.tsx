import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
});

const Item: React.FC<Item> = ({text, imagePath}) => (
  <View style={styles.item}>
    <ImageBackground source={require(imagePath)}>
      <Text>{text}</Text>
    </ImageBackground>
  </View>
);

export default Item;
