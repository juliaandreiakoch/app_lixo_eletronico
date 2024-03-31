import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/header';

import CheckBox from 'react-native-check-box';

export function Signup({ navigation }) {
  const [isONGChecked, setIsONGChecked] = React.useState(false);
  const [isWasteDisposalChecked, setIsWasteDisposalChecked] = React.useState(false);

  const handleONGCheck = () => {
    setIsONGChecked(!isONGChecked);
    if(isWasteDisposalChecked) {
      setIsWasteDisposalChecked(false);
    }
  }

  const handleWasteDisposalCheck = () => {
    setIsWasteDisposalChecked(!isWasteDisposalChecked);
    if(isONGChecked) {
      setIsONGChecked(false);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Header/>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Create new Account</Text>
        <Text style={styles.subtitle}>Already Registered? Log in here.</Text>
        <Text style={styles.credentials}>NAME</Text>
        <TextInput 
          placeholder='Name'
          autCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <Text style={styles.credentials}>EMAIL</Text>
        <TextInput 
          placeholder='Email@test.com'
          autCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <Text style={styles.credentials}>PASSWORD</Text>
        <TextInput 
          placeholder='********'
          autCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <View style={styles.userTypes}>
          <View style={styles.singleUserType}>
            <CheckBox isChecked={isONGChecked} onClick={handleONGCheck}/>
            <Text>I'm an "ONG"</Text>
          </View>
          <View style={styles.singleUserType}>
            <CheckBox isChecked={isWasteDisposalChecked} onClick={handleWasteDisposalCheck}/>
            <Text>I'm a local to E-waste disposal</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.button}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.haveAccount}>Already Have Account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupButton} onPress={() => navigation.navigate('Login')}>Log in!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D4D6C6',
  },
  credentials: {
    fontSize: 11,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '80%',
    marginBottom: 300,
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 11,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  singleUserType: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  userTypes: {
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    fontSize: 16,
    backgroundColor: '#71FE6A',
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 5,
    overflow: 'hidden',
  },
  haveAccount: {
    marginBottom: 10,
  },
  signupButton: {
    fontWeight: 'bold',
  },
});
