import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Maps from '../components/map';


export function Disposal({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Text style={styles.title}>Encontre um local de descarte</Text>

      <View style={styles.mapContainer}>
        <Maps style={styles.map}></Maps>
      </View>

      <Footer navigation={navigation}/>
       
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#1C2120',
},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 15,
    color: 'white',
  },
  mapContainer: {
    marginTop: 20,
    height: 350,
  },
  places: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }, 
  simpleText: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#71FE6A',
  }, 
  mapContainer: {
    flex: 1,
  }
});
