import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Header } from '../components/headerAccessPages';
import { Footer } from '../components/footerAccessPage';
import { auth } from '../services/firebaseConnection'; 
import { signInWithEmailAndPassword } from 'firebase/auth';

export function Login({ navigation, route }) {
  const { changeStatus } = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        changeStatus(user);
      })
      .catch((error) => {
        Alert.alert('Erro de login', 'Email ou senha inválidos.');
        console.error(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Header/>
      <View style={styles.loginContainer}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>Faça Login para continuar.</Text>
          <Text style={styles.credentials}>EMAIL</Text>
          <TextInput 
            placeholder='Email'
            autoCorrect={false}
            onChangeText={setEmail}
            value={email}
            style={styles.input}
            keyboardType='email-address'
          />
          <Text style={styles.credentials}>SENHA</Text>
          <TextInput 
            placeholder='********'
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            style={styles.input}
          />
          <TouchableOpacity>
            <Text style={styles.button} onPress={handleLogin}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.haveAccount}>Não possui uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>Cadastre-se!</Text>
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
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D0D1D4',
    width: '80%',
    height: '75%',
    marginBottom: 40,
  },
  credentials: {
    fontSize: 11,
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11,
    marginBottom: 10,
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
  button: {
    fontSize: 16,
    backgroundColor: '#71FE6A',
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
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
