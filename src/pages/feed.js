import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function Feed({ navigation }) {
    return(
        <KeyboardAvoidingView style={styles.background}>
            <Header/>
            <View style={styles.feed}>
                <Text></Text>
            </View>
            <Footer navigation={navigation}/>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#939598',
        paddingTop: 45
    },
    feed: {
        flex:1,
        backgroundColor: '#000000',
    }
});