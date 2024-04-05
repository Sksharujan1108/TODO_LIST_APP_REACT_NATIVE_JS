import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ItemDisplay = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item, index) => item.id.toString()}
        data={items}
        renderItem={({ item }) => (
          <View>
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.value}</Text>
            </View>

            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default ItemDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  itemContainer: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    elevation: 4,
    marginBottom: 10,
    padding: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
