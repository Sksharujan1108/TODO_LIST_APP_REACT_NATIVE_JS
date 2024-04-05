import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ItemDisplay = ({ items, handleDelete }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={items}
        renderItem={itemData  => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{itemData?.item.value}</Text>

              <TouchableOpacity 
                onPress={() => handleDelete(itemData.item.id)}
                style={{padding: 10, backgroundColor: 'red', borderRadius: 10}}x
              >
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
    backgroundColor: 'pink',
  },
  itemContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#C5BCBC',
    borderColor: '#F6F6',
    borderWidth: 3,
    marginTop: 20,
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
