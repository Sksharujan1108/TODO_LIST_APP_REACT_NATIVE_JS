import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddItem from '../AddScreen';
import ItemDisplay from '../../component/ItemDisplay';

const TodoAppScreen = () => {
    const [isAddMode, setIsAddMode] = useState(false);
    const [items, setItems] = useState([]);

    const addItem = (item) => {
         if (item.length == 0) {
            return;
        } 
        setItems((currentItem) => {
            return [
                ...currentItem,{id: Math.random().toString(), value: item}
            ]
        })
        setIsAddMode(false)
    }

    const handleDelete = (itemId) => {
        setItems((currentItems) => {
            return currentItems.filter((item) => item.id != itemId)
        })
    } 

    const onCloseModel = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}> TodoList </Text>

            <TouchableOpacity
                onPress={() => setIsAddMode(true)}
                style={styles.ButtonContainer}
                activeOpacity={0.4}
            >
                <Text style={styles.ButtonText}> Add Item </Text>
            </TouchableOpacity>

            <AddItem 
              isAddMode={isAddMode} 
              onCloseModel={onCloseModel} 
              addItem={addItem}
            />

            <ItemDisplay
              items={items}
              setItems={setItems}
              handleDelete={handleDelete}
            />
        </View>
    );
};

export default TodoAppScreen;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        // justifyContent: 'center',
        
        backgroundColor: '#A19A9A',
    },
    title: {
        marginTop: 60,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#4A90E2',
        textAlign: 'center',
    },
    ButtonContainer: {
        backgroundColor: 'green',
        borderRadius: 5,
        paddingHorizontal: 50,
        paddingVertical: 14,
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    ButtonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Inter',
    },
})