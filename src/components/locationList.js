import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function LocationList({ locations }) {
  return (
    <FlatList
      data={locations}
      renderItem={({ item }) => {
        return(
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.formatted_address}</Text>
          {item.opening_hours && item.opening_hours.open_now !== undefined && item.opening_hours.open_now == true && (
            <Text style={styles.opening_hours}>Aberto agora</Text>
          )}
          {item.opening_hours && item.opening_hours.open_now !== undefined && item.opening_hours.open_now == false && (
            <Text style={styles.opening_hours}>Fechado agora</Text>
          )}
    
        </View>
      )}}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    width: '90%',
    padding: 10,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#939598',
    alignSelf: 'center',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    color: '#555',
  },
  opening_hours: {
    color: 'white',
    marginBottom: 5,
    marginTop: 12,
  }, 
});
