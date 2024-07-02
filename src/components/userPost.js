import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export function UserPost({ user, image, secondImage, thirdImage, fourthImage, description, navigation, category }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product', { imageUrl: image, secondImage: secondImage, thirdImage: thirdImage, fourthImage: fourthImage, category: category, description: description, user: user })}>
      <View style={styles.post}>
          <Image source={{ uri: image }} style={styles.productImage}/>
          <View style={styles.productInfos}>
            <Text style={styles.category}>{category}</Text>
              <View style={styles.descriptionAndEditicon}>
                <Text style={styles.description}>{description}</Text>
                <TouchableOpacity>
                  <Image 
                    source={require('../assets/editIcon.png')}/>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#74777B',
    width: 'auto',
    height: 130,
    marginBottom: 5,
  },
  productImage: {
    width: 120,
    height: 100,
    marginLeft: 8
  },
  description: {
    fontSize: 12,
    color: 'black',
    margin: 15,
    paddingLeft: 10,
    textAlign: 'justify',
    flexWrap: 'wrap',
  },
  category: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    paddingRight: 30
  },
  productInfos: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  descriptionAndEditicon: {
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  }
});