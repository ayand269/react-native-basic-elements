//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from '../Icon';
import { useTheme } from '../Theme/theming';
// create a component
const AppTextInput = ({ inputStyle, mainContainerStyle, leftIcon, placeholderTextColor = '#999', rightAction, rightActionButtonStyle, inputContainerStyle, onRightIconPress, title, allowFontScaling = false, titleStyle, value, onChnageText, style, ...props }) => {
    const colors = useTheme();
    return (React.createElement(View, { style: [styles.container, mainContainerStyle] },
        title ?
            React.createElement(Text, { style: [
                    styles.titleStyle,
                    {
                        color: colors.primaryFontColor
                    },
                    titleStyle
                ], allowFontScaling: allowFontScaling }, title)
            :
                null,
        React.createElement(View, { style: [
                styles.inputContainerStyle,
                {
                    borderColor: colors.borderColor
                },
                inputContainerStyle
            ] },
            leftIcon ?
                React.createElement(Icon, { ...leftIcon, style: {
                        marginHorizontal: 10,
                        ...leftIcon.style
                    } })
                :
                    null,
            React.createElement(TextInput, { style: [
                    styles.textInput,
                    {
                        color: colors.primaryFontColor
                    },
                    inputStyle,
                    style
                ], placeholderTextColor: placeholderTextColor, allowFontScaling: allowFontScaling, value: value, onChangeText: onChnageText, ...props }),
            rightAction ?
                React.createElement(TouchableOpacity, { style: [styles.rightActionButton, rightActionButtonStyle], onPress: onRightIconPress }, rightAction)
                :
                    null)));
};
// define your styles
const styles = StyleSheet.create({
    container: {
    // marginHorizontal: 10
    },
    textInput: {
        minHeight: 50,
        paddingHorizontal: 5,
        flex: 1
    },
    inputContainerStyle: {
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightActionButton: {
        marginHorizontal: 10
    },
    titleStyle: {
        fontSize: 18,
        color: '#000',
        textTransform: 'capitalize',
        marginBottom: 3
    }
});
//make this component available to the app
export default AppTextInput;
//# sourceMappingURL=AppTextInput.js.map