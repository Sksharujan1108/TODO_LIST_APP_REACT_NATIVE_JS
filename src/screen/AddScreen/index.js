import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import TextInputField from '../../component/TextInput';
import MainButton from '../../component/Button';

const AddItem = ({ isAddMode, onCloseModel, addItem }) => {
    const [item, setItem] = useState('')
    return (
        <Modal 
          visible={isAddMode} 
          animationType='slide'
        >
            <View>
                <TextInputField 
                  placeholder="Add Item" 
                  onChangeText={(text) => setItem(text)}
                  value={item}
                />
            </View>

            <View style={styles.btnContainer}>
               <MainButton
                  onPress={() => {
                    console.log('Add Item', item);
                    addItem(item);
                    setItem('')
                  }}
                  title="Add"
                  style={styles.cancelBtn}
                  testID="cancelBtn"
               />

               <MainButton
                   onPress={onCloseModel}
                   title="Cancel"
                   color="#28a749"
                   style={styles.cancelBtn}
               />
            </View>
        </Modal>
    );
};

export default AddItem;

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 20,
    },
});
