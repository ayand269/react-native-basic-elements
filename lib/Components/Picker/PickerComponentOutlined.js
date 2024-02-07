import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Modal, Animated, Pressable, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../Card';
import Text from '../Text';
import Icon from '../Icon';
let defaultCloseIcon = {
    type: 'Ionicon',
    name: 'close',
    size: 25
};
let defaultRightIcon = {
    type: 'Ionicon',
    name: 'chevron-forward',
    size: 25
};
const { height, width } = Dimensions.get('window');
const PickerComponentOutlined = ({ borderWidth = 1, inputStyle, inputTextStyle, selectedValue = '', placeholder, placeholderColor = '#999', options = [], valueKey = 'value', labelKey = 'label', placeholderTextSize = 18, backdropColor = '#000000', backdrop = true, backdropOpacity = 0.5, modalContainerStyle, containerStyle, placeholderTextStyle, modalBackgroundColor = '#ffffff', backgroundColor = '#fff', activeBorderColor = 'blue', inactiveBorderColor = '#000', inputHeight = 50, renderItem, closeIcon = defaultCloseIcon, modalHeading = 'Choose', modalHeadingTitleStyle, modalHeaderShadow = true, showHeader = true, onValueSelect = () => { }, inputRightIcon = defaultRightIcon }) => {
    const positionTop = useRef(new Animated.Value(0)).current;
    const positionLeft = useRef(new Animated.Value(15)).current;
    const textFontSize = useRef(new Animated.Value(placeholderTextSize)).current;
    const [textInputValue, setTextInputValue] = useState(selectedValue);
    const [focused, setFocused] = useState(false);
    useEffect(() => {
        if (selectedValue == '') {
            onBlurAnimation();
        }
        else {
            onFocusAnimation();
        }
        if (textInputValue != selectedValue) {
            setTextInputValue(selectedValue);
        }
    }, [selectedValue]);
    const handleTextPress = () => {
        if (!focused) {
            onFocusAnimation();
        }
    };
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
    if (!renderItem) {
        console.warn("Props 'renderItem' is required.");
        return null;
    }
    const [pickerVisiable, setPickerVisiable] = useState(false);
    const getPickerValue = (value) => {
        let index = options.findIndex(it => it[valueKey] == value);
        if (index >= 0) {
            let label = options[index][labelKey];
            return label;
        }
    };
    const _onValueSelect = (item) => {
        onValueSelect(item[valueKey]);
        setPickerVisiable(false);
        if (item[valueKey]) {
            onFocusAnimation();
        }
    };
    const _itemIsSelected = (value) => {
        return value == selectedValue;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Pressable, { style: [styles.container, [
                    {
                        height: 55,
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        width: '100%',
                        borderWidth: borderWidth,
                        borderColor: focused ? activeBorderColor : inactiveBorderColor
                    },
                    inputStyle,
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }
                ], containerStyle], onPress: () => setPickerVisiable(true), onFocus: () => onFocusAnimation(), onBlur: () => onBlurAnimation() },
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
                } },
                React.createElement(Animated.Text, { onPress: handleTextPress, style: [placeholderTextStyle, {
                            fontSize: textFontSize,
                            color: focused ? activeBorderColor : placeholderColor
                        }] }, placeholder)),
            React.createElement(Text, { style: {
                    ...inputTextStyle,
                    color: selectedValue == '' ? placeholderColor : inputTextStyle === null || inputTextStyle === void 0 ? void 0 : inputTextStyle.color
                } }, selectedValue != '' ? getPickerValue(selectedValue) : React.createElement(Animated.Text, null)),
            React.createElement(Icon, { color: placeholderColor, ...inputRightIcon })),
        React.createElement(Modal, { visible: pickerVisiable, transparent: true },
            React.createElement(TouchableWithoutFeedback, { onPress: () => setPickerVisiable(false) },
                React.createElement(View, { style: {
                        position: 'absolute',
                        height: height,
                        width: width,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: backdrop ? backdropColor : undefined,
                        opacity: backdrop ? backdropOpacity : undefined
                    } })),
            React.createElement(View, { style: [{
                        flex: 1,
                        justifyContent: 'center'
                    }], pointerEvents: 'box-none' },
                React.createElement(View, { style: [{
                            borderRadius: 8,
                            overflow: 'hidden',
                            marginHorizontal: width * 0.02,
                        }, modalContainerStyle, { backgroundColor: modalBackgroundColor }] },
                    showHeader ?
                        React.createElement(Card, { style: {
                                paddingHorizontal: 15,
                                paddingVertical: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderRadius: 0,
                                backgroundColor: modalBackgroundColor
                            }, shadow: modalHeaderShadow },
                            React.createElement(Text.Heading, { title: modalHeading, style: [{
                                        fontSize: 20
                                    }, modalHeadingTitleStyle] }),
                            React.createElement(Icon, { ...closeIcon, onPress: () => setPickerVisiable(false) }))
                        :
                            null,
                    React.createElement(View, { style: {
                            maxHeight: height / 2.3
                        } },
                        React.createElement(FlatList, { data: options, keyExtractor: (item, index) => index.toString(), renderItem: ({ item, index }) => {
                                return renderItem(item, index, () => _onValueSelect(item), _itemIsSelected(item[valueKey]));
                            } })))))));
};
const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    // rightActionButton: {
    //     marginHorizontal: 10
    // },
});
export default PickerComponentOutlined;
//# sourceMappingURL=PickerComponentOutlined.js.map