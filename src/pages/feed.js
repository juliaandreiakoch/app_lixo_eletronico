import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { FeedData } from '../components/feedData';
import { postList } from '../mocks/postList';
import { Post } from '../components/post'; 

export function Feed({ navigation }) {
    return(
        <View style={styles.container}>
            <Header style={styles.background} navigation={navigation}/>
            <View style={styles.buttonNew}>
                <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
                    <Image
                        source={require('../assets/addLight.png')}
                        style={styles.add}
                    />
                </TouchableOpacity>
                <Text style={styles.postButton}>Divulgar</Text>
            </View>
            <ScrollView>
                <FeedData Post={Post} postList={postList} navigation={navigation}/>
            </ScrollView>
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2120',
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
        alignItems: 'center',
    },
    add: {
        width: 32, 
        height: 32,
        marginLeft: 8,
        marginRight: 5,
        marginBottom: 15,
        marginTop: 15
    },
    postButton: {
        fontSize: 18,
        color: 'white'
    }
});
