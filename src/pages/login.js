import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/header';

export function Login() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <Header/>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Sign in to continue.</Text>
        <Text style={styles.credentials}>NAME</Text>
        <TextInput 
          placeholder='Name'
          autCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <Text style={styles.credentials}>PASSWORD</Text>
        <TextInput 
          placeholder='Password'
          autCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.button}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <TouchableOpacity>
          <Text style={styles.signupButton}>Signup!</Text>
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
  forgotPassword: {
    marginBottom: 10,
  },
  signupButton: {
    fontWeight: 'bold',
  },
});
