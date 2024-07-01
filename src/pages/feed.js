import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { FeedData } from '../components/feedData';
import { postList } from '../mocks/postList';
import { Post } from '../components/post'; 

export function Feed({ navigation }) {
    return(
        <View style={styles.container}>
            <View>
                <Header navigation={navigation}/>
                <View style={styles.buttonNew}>
                    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                        <Image
                            source={require('../assets/addLight.png')}
                            style={styles.add}
                        />
                    </TouchableOpacity>
                    <Text style={styles.postButton}>Divulgar</Text>
                </View>
                <ScrollView style={styles.postContainer}>
                    <FeedData Post={Post} postList={postList} navigation={navigation}/>
                </ScrollView>
            </View>
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2120',
    },
    postContainer: {
        height: '75%',
    },
    feed: {
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
