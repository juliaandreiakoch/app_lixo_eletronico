import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function Product({ route, navigation }) {
  const { category, imageUrl, secondImage, thirdImage, fourthImage, description, user } = route.params;

    return(
        <View style={styles.container}>
           <Header navigation={navigation}/>
            <ScrollView>
              <View style={styles.productInfos}>
                <Text style={styles.product}>Produto</Text>  
                <Image source={{ uri: imageUrl }} style={styles.image}/>
                <Text style={styles.category}>{category}</Text>   
                <Text style={styles.description}>{description}</Text> 

                  <View style={styles.imagesArea}>
                    <Text style={styles.simpleText}>Fotos do produto</Text> 
                    <View style={styles.images}>
                      {secondImage && <Image source={{ uri: secondImage }} style={styles.imageDetail}/>}
                      {thirdImage && <Image source={{ uri: thirdImage }} style={styles.imageDetail}/>}
                      {fourthImage && <Image source={{ uri: fourthImage }} style={styles.imageDetail}/>}
                    </View>

                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.chatButtonText}>Conversar com {user}</Text>
                      <Image
                          source={require('../assets/chatIcon.png')}
                          style={styles.chatIcon}
                      />
                    </TouchableOpacity>
                  </View>
              </View>
            </ScrollView>
            <Footer navigation={navigation} />            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2120',
    },
    image: {
      width: 300,
      height: 200,
      marginTop: 20,
      borderRadius: 10
    },
    imageDetail: {
      width: '40%', 
      height: 120, 
      borderRadius: 5,
      marginTop: 15,
      marginLeft: 15,
    },
    productInfos: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
    },
    category: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 15,
      color: 'white',
    },
    product: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
    },
    description: {
      fontSize: 12,
      marginBottom: 10,
      marginTop: 15,
      paddingHorizontal: 15,
      textAlign: 'center',
      color: 'white',
    },
    simpleText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      marginLeft: 40
    },
    chatButtonText: {
      fontSize: 11,
      color: 'black',
      fontWeight: 'bold',
    },
    chatIcon: {
      width: 20, 
      height: 20,
      marginLeft: 5
    },
    button: {
      flexDirection: 'row',
      alignSelf: 'center',
      backgroundColor: '#71FE6A',
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5
    },
    imagesArea: {
      width: '90%',
      alignItems: 'flex-start',
      marginTop: 30,
    },
    images: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 10,
      alignItems: 'flex-start',
      marginLeft: 25,
    }
});
