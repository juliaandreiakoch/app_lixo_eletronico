import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';

export function Header({ navigation }) {
  const [showInput, setShowInput] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Quattrocento': require('../../assets/fonts/Quattrocento-Regular.ttf'),
      });
    }
    loadFonts();
  }, []);

  const handleButtonClick = () => {
      setShowInput(!showInput);
      setShowLogo(!showLogo);
  };

  return (
    <View style={styles.header}>
      <View style={styles.identification}>
        <Image 
          source={require('../assets/logoIcon.png')}
          style={styles.logo}
        />
        {
          showLogo &&
          <Text style={styles.appName}>DescarTech</Text>
        }
      </View>
      {showInput &&
        <TextInput
          value={showInput}
          placeholder="Pesquisar..."
          style={styles.textInput}
        /> 
      }
        <TouchableOpacity onPress={handleButtonClick}>
          <Image 
              source={require('../assets/searchIcon.png')}
              style={styles.search}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <View >
            <Image
              source={require('../assets/perfilIcon.png')}
              style={styles.perfil}
            />
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    flexDirection: 'row',
    alignItems:'flex-end',
    backgroundColor: '#939598',
    paddingHorizontal: 10,
    paddingBottom: 5,
    justifyContent: 'space-between'
  },
  appName: {
    fontFamily: 'Quattrocento',
    fontSize: 25,
    fontWeight: 'normal',
    flex: 1,
  },
  logo: {
    width: 43, 
    height: 43,
    borderRadius: 30,
    marginRight: 10
  },
  search: {
    width: 35, 
    height: 35,
  },
  perfil: {
    width: 38, 
    height: 38,
    marginLeft: 10
  },  
  identification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  textInput: {
    width: 225, 
    height: 35,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 3
  } 
});
