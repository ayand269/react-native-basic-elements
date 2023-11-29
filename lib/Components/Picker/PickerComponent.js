//import liraries
import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../Theme/theming';
const RNPicker = ({ style, options = [], placeholder = '', showPlaceholder = true, labelKey = 'label', valueKey = 'value', selectedValue = '', onValueChange, mode = 'dropdown', containerStyle, iosModalBackGroundColor, textStyle = {}, placeholderColor = '#999', ...props }) => {
    const colors = useTheme();
    const [pickerVisiable, setPIckerVisiable] = useState(false);
    const getPickerValue = (value) => {
        let index = options.findIndex(it => it[valueKey] == value);
        if (index >= 0) {
            let label = options[index][labelKey];
            return label;
        }
    };
    const PickerAndroid = useMemo(() => {
        return (React.createElement(Picker, { mode: mode, style: style, selectedValue: selectedValue, onValueChange: (val) => {
                if (val) {
                    onValueChange ? onValueChange(val) : null;
                }
            }, ...props },
            showPlaceholder ?
                React.createElement(Picker.Item, { label: placeholder, style: {
                        ...textStyle,
                        color: placeholderColor,
                    } })
                :
                    null,
            options.map((item, index) => {
                return (React.createElement(Picker.Item, { key: index, label: item[labelKey], value: item[valueKey], style: {
                        color: colors.primaryFontColor,
                        ...textStyle
                    } }));
            })));
    }, [selectedValue, options]);
    const IosPicker = useMemo(() => {
        return (React.createElement(Pressable, { style: [
                {
                    height: 55,
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    width: '100%'
                },
                style
            ], onPress: () => setPIckerVisiable(true) },
            React.createElement(Text, { style: {
                    ...textStyle,
                    color: selectedValue == '' ? placeholderColor : textStyle.color
                } }, selectedValue != '' ? getPickerValue(selectedValue) : placeholder)));
    }, [selectedValue]);
    return (React.createElement(View, { style: [
            styles.container,
            {
                borderColor: colors.borderColor
            },
            containerStyle
        ] },
        Platform.OS == 'ios' ?
            IosPicker
            :
                PickerAndroid,
        React.createElement(Modal, { visible: pickerVisiable, transparent: true },
            React.createElement(View, { style: {
                    flex: 1,
                    backgroundColor: '#000000ab'
                } },
                React.createElement(Pressable, { style: {
                        flex: 1
                    }, onPress: () => setPIckerVisiable(false) }),
                React.createElement(View, { style: {
                        backgroundColor: iosModalBackGroundColor ? iosModalBackGroundColor : colors.cardColor,
                        borderRadius: 10,
                        marginHorizontal: 15
                    } },
                    React.createElement(Picker, { mode: mode, selectedValue: selectedValue, onValueChange: (val) => {
                            if (val) {
                                if (onValueChange) {
                                    onValueChange(val);
                                }
                            }
                        }, ...props },
                        showPlaceholder ?
                            React.createElement(Picker.Item, { label: placeholder, style: {
                                    ...textStyle,
                                    color: placeholderColor
                                } })
                            :
                                null,
                        options.map((item, index) => {
                            return (React.createElement(Picker.Item, { key: index, label: item[labelKey], value: item[valueKey], color: colors.primaryFontColor.toString(), style: {
                                    color: colors.primaryFontColor,
                                    ...textStyle
                                } }));
                        }))),
                React.createElement(Pressable, { style: {
                        backgroundColor: iosModalBackGroundColor ? iosModalBackGroundColor : colors.buttonColor,
                        height: 55,
                        marginTop: 10,
                        marginBottom: 20,
                        marginHorizontal: 15,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }, onPress: () => setPIckerVisiable(false) },
                    React.createElement(Text, { style: {
                            color: colors.primaryFontColor,
                            fontSize: 20,
                        } }, "Done"))))));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 10
    },
});
//make this component available to the app
export default RNPicker;
//# sourceMappingURL=PickerComponent.js.map