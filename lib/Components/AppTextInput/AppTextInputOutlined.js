//import liraries
import React, { useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Animated, TouchableOpacity } from 'react-native';
const AppTextInputOutlined = ({ placeholder = 'Test', borderWidth = 1, rightAction, rightActionButtonStyle, onRightIconPress, value = '', onChangeText, containerStyle, placeholderTextStyle, inputStyle, backgroundColor = '#fff', inputHeight = 50, placeholderTextSize = 18, ...props }) => {
    const positionTop = useRef(new Animated.Value(0)).current;
    const positionLeft = useRef(new Animated.Value(15)).current;
    const textFontSize = useRef(new Animated.Value(placeholderTextSize)).current;
    const [textInputValue, setTextInputValue] = useState(value);
    const onFocusAnimation = () => {
        Animated.timing(positionTop, {
            toValue: -(inputHeight / 2) - 2,
            duration: 100,
            useNativeDriver: true
        }).start();
        Animated.timing(textFontSize, {
            toValue: placeholderTextSize - 4,
            duration: 100,
            useNativeDriver: false
        }).start();
        Animated.timing(positionLeft, {
            toValue: 10,
            duration: 100,
            useNativeDriver: true
        }).start();
    };
    const onBlurAnimation = () => {
        if (textInputValue == '') {
            Animated.timing(positionTop, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }).start();
            Animated.timing(textFontSize, {
                toValue: placeholderTextSize,
                duration: 100,
                useNativeDriver: false
            }).start();
            Animated.timing(positionLeft, {
                toValue: 15,
                duration: 100,
                useNativeDriver: true
            }).start();
        }
    };
    return (React.createElement(View, { style: [styles.container, {
                borderWidth: borderWidth,
                backgroundColor: backgroundColor
            }, containerStyle] },
        React.createElement(Animated.View, { style: {
                position: 'absolute',
                backgroundColor: backgroundColor,
                zIndex: 0,
                paddingHorizontal: 5,
                transform: [{
                        translateY: positionTop
                    }, {
                        translateX: positionLeft
                    }],
                borderRadius: 20
            } },
            React.createElement(Animated.Text, { style: [placeholderTextStyle, {
                        fontSize: textFontSize
                    }] }, placeholder)),
        React.createElement(TextInput, { ...props, style: [inputStyle, {
                    flex: 1,
                    height: inputHeight,
                    paddingLeft: 20,
                }], onFocus: () => onFocusAnimation(), onBlur: () => onBlurAnimation(), value: textInputValue, onChangeText: (val) => {
                setTextInputValue(val);
                if (onChangeText)
                    onChangeText(val);
            } }),
        rightAction ?
            React.createElement(TouchableOpacity, { style: [styles.rightActionButton, rightActionButtonStyle], onPress: onRightIconPress }, rightAction)
            :
                null));
};
const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    rightActionButton: {
        marginHorizontal: 10
    },
});
export default AppTextInputOutlined;
//# sourceMappingURL=AppTextInputOutlined.js.map