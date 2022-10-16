//import liraries
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
const RadioButton = ({ selected = false, size = 20, activeColor = 'blue', inactiveColor = '#999', containerStyle, onChange }) => {
    return (React.createElement(TouchableOpacity, { style: [styles.container, containerStyle, {
                height: size,
                width: size,
                borderRadius: size / 2,
                padding: 2.5,
                borderColor: selected ? activeColor : inactiveColor
            }], onPress: () => onChange ? onChange(!selected) : null }, selected ?
        React.createElement(View, { style: {
                flex: 1,
                backgroundColor: activeColor,
                borderRadius: size / 2
            } })
        :
            null));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        borderWidth: 2.5,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
});
//make this component available to the app
export default RadioButton;
//# sourceMappingURL=RadioButton.js.map