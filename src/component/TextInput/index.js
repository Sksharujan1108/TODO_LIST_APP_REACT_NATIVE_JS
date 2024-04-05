import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";

const TextInputField = (props) => {
  const {
    placeholder,
    onChangeText,
    value,
    secureTextEntry,
    autoCorrect,
    autoCapitalize,
    keyboardType,
    autoCompleteType,
  } = props;

  return (

      <View style={styles.InputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          // isAddMode={isAddMode}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
        />
      </View>
  );
};

export default TextInputField;
