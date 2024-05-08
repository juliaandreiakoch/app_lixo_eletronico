import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/headerAccessPages';
import CheckBox from 'react-native-check-box';
import { Footer } from '../components/footerAccessPage';

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
        <Text style={styles.title}>Crie uma nova conta</Text>
        <Text style={styles.subtitle}>Insira seus dados para realizar o cadastro.</Text>
        <Text style={styles.credentials}>NOME</Text>
        <TextInput 
          placeholder='Nome'
          autCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <Text style={styles.credentials}>EMAIL</Text>
        <TextInput 
          placeholder='Email@seuEmail.com'
          autCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <Text style={styles.credentials}>SENHA</Text>
        <TextInput 
          placeholder='********'
          autCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <View style={styles.userTypes}>
          <View style={styles.singleUserType}>
            <CheckBox isChecked={isONGChecked} onClick={handleONGCheck}/>
            <Text>Sou uma ONG</Text>
          </View>
          <View style={styles.singleUserType}>
            <CheckBox isChecked={isWasteDisposalChecked} onClick={handleWasteDisposalCheck}/>
            <Text>Sou um local de descarte</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.button}>Cadastrar</Text>
        </TouchableOpacity>
        <Text style={styles.haveAccount}>Já possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signupButton} onPress={() => navigation.navigate('Login')}>Acesse aqui!</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation}/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D0D1D4',
    paddingTop: 45,
  },
  credentials: {
    fontSize: 11,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
  loginContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '80%',
    height: '85%',
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
