import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export function UserPost({imagem, descricao, category }) {
  return (
    <View style={styles.post}>
        <TouchableOpacity>
          <Image source={{ uri: imagem }} style={styles.productImage}/>
        </TouchableOpacity>
        <View style={styles.productInfos}>
      <Text style={styles.category}>{category}</Text>
      <View style={styles.descriptionAndEditicon}>
        <Text style={styles.description}>{descricao}</Text>
        <TouchableOpacity>
          <Image 
            source={require('../assets/editIcon.png')}
            style={styles.perfilIcon}/>
          </TouchableOpacity>
      </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#74777B',
    marginBottom: 1,
  },
  productImage: {
    width: 120,
    height: 100,
    marginLeft: 2
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
    marginTop: 10
  },
  productInfos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionAndEditicon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10
  }
});