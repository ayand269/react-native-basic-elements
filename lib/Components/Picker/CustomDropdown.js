import React, { useState } from 'react';
import { Dimensions, FlatList, Modal, Pressable, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../Card';
import Text from '../Text';
import Icon from '../Icon';
let defaultCloseIcon = {
    type: 'Ionicon',
    name: 'close',
    size: 25
};
const { height, width } = Dimensions.get('window');
const CustomDropdown = ({ inputStyle, inputTextStyle, selectedValue, placeholder, placeholderColor = '#999', options = [], valueKey = 'value', labelKey = 'label', backdropColor = '#000000', backdrop = true, backdropOpacity = 0.5, modalContainerStyle, modalBackgroundColor = '#ffffff', renderItem, closeIcon = defaultCloseIcon, modalHeading = 'Choose', modalHeadingTitleStyle, modalHeaderShadow = true, showHeader = true, onValueSelect = () => { } }) => {
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
    };
    const _itemIsSelected = (value) => {
        return value == selectedValue;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Pressable, { style: [
                {
                    height: 55,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    width: '100%',
                    borderWidth: 1
                },
                inputStyle
            ], onPress: () => setPickerVisiable(true) },
            React.createElement(Text, { style: {
                    ...inputTextStyle,
                    color: selectedValue == '' ? placeholderColor : inputTextStyle === null || inputTextStyle === void 0 ? void 0 : inputTextStyle.color
                } }, selectedValue != '' ? getPickerValue(selectedValue) : placeholder)),
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
export default CustomDropdown;
const styles = StyleSheet.create({});
//# sourceMappingURL=CustomDropdown.js.map