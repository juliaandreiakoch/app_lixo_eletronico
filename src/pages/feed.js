import { StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Text, Image} from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function Feed({ navigation }) {
    return(
        <View style={styles.container}>
            <Header style={styles.background}/>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                <View style={styles.buttonNew}>
                    <Image
                        source={require('../assets/add.png')}
                        style={styles.add}
                    />
                    <Text style={styles.postButton}>Divulgar</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.feed}>
                <Text>Conteúdo do Feed</Text>
            </View>
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: '#939598',
        marginTop: 100
    },
    feed: {
        flex: 1,
        backgroundColor: '#D0D1D4',
    },
    buttonNew: {
        flexDirection: 'row',
        
        backgroundColor: '#D0D1D4',
    },
    add: {
        width: 35, 
        height: 35,
        margin: 10
    },
    postButton: {
        fontSize: 18,
        paddingTop: 16
    }
});
