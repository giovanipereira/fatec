import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
//import Swiper from 'react-native-swiper/src/index';
import Swiper from 'react-native-swiper/src';

export default function Swipercomponents() {
 return (
    <Swiper
        style={styles.wrapper}
        dotStyle={{
            backgroundColor: '#000',
            borderColor: '#000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10,
        }}
        activeDotColor="#FFF"
        activeDotStyle={{
            borderColor: '#000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10,
        }}
    >
   </Swiper>
  );
}

const styles = StyleSheet.create({
    wrapper:{
  
    },
    slide:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }
  });