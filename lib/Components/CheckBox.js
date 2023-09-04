//import liraries
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';
const CheckBox = ({ checked = false, activeColor = 'blue', inactiveColor = '#999', tintColor = '#fff', onChange, size = 16, inactiveBackgroundColor = '#fff', containerStyle }) => {
    return (React.createElement(TouchableOpacity, { style: [styles.container, containerStyle, {
                height: size,
                width: size,
                backgroundColor: checked ? activeColor : inactiveBackgroundColor,
                borderColor: checked ? activeColor : inactiveColor
            }], onPress: () => onChange ? onChange(!checked) : null }, checked ?
        React.createElement(Icon, { name: 'check', type: 'Feather', size: size - 5, color: tintColor })
        :
            null));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        borderWidth: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
});
//make this component available to the app
export default CheckBox;
//# sourceMappingURL=CheckBox.js.map