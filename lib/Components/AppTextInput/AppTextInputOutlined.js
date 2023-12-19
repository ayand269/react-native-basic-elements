//import liraries
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Animated, TouchableOpacity } from 'react-native';
const AppTextInputOutlined = ({ placeholder = 'Placeholder', borderWidth = 1, rightAction, rightActionButtonStyle, onRightIconPress, value = '', onChangeText, containerStyle, placeholderTextStyle, inputStyle, backgroundColor = '#fff', inputHeight = 50, placeholderTextSize = 18, placeholderTextColor = '#999', activeBorderColor = 'blue', inactiveBorderColor = '#000', style, ...props }) => {
    const positionTop = useRef(new Animated.Value(0)).current;
    const positionLeft = useRef(new Animated.Value(15)).current;
    const textFontSize = useRef(new Animated.Value(placeholderTextSize)).current;
    const [textInputValue, setTextInputValue] = useState(value);
    const [focused, setFocused] = useState(false);
    useEffect(() => {
        if (value == '') {
            onBlurAnimation();
        }
        else {
            onFocusAnimation();
        }
        if (textInputValue != value) {
            setTextInputValue(value);
        }
    }, [value]);
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
        setFocused(true);
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
        setFocused(false);
    };
    return (React.createElement(View, { style: [styles.container, {
                borderWidth: borderWidth,
                backgroundColor: backgroundColor,
                borderColor: focused ? activeBorderColor : inactiveBorderColor
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
                        fontSize: textFontSize,
                        color: focused ? activeBorderColor : placeholderTextColor
                    }] }, placeholder)),
        React.createElement(TextInput, { ...props, style: [inputStyle, style, {
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