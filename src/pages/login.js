import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/headerAccessPages';
import { Footer } from '../components/footer'

export function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Header/>
      <View style={styles.loginContainer}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>Faça Login para continuar.</Text>
          <Text style={styles.credentials}>NOME</Text>
          <TextInput 
            placeholder='Nome'
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
          <TouchableOpacity>
            <Text style={styles.button}>Entrar</Text>
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
    backgroundColor: '#D4D6C6',
    paddingTop: 45
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D4D6C6',
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
