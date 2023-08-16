//import liraries
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Modal, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '../Theme/theming';
import Text from '../Text';
import Icon from '../Icon';
import Card from '../Card';
const { height, width } = Dimensions.get('window');
let defaultCloseIcon = {
    type: 'Ionicon',
    name: 'close',
    size: 25
};
let defaultCkeckIcon = {
    name: 'checkmark-sharp',
    type: 'Ionicon',
    size: 25,
    color: '#1AB940'
};
const MultiSelectDropdown = ({ options = [], valueKey = 'value', labelKey = 'label', returnDataType = (item) => { return item[valueKey]; }, onValueChange, selectedValues, modalContainerStyle = {}, inputContainerStyle = {}, placeholder = 'Choose', placeholderStyle = {}, closeIcon = defaultCloseIcon, modalHeading = 'Choose', itemContainerStyle = {}, itemTextStyle = {}, selectedIcon = defaultCkeckIcon, modalHeadingTitle = {} }) => {
    const colors = useTheme();
    const [allItems, setAllItems] = useState(options);
    const [modalVisiable, setModalVisiable] = useState(false);
    useEffect(() => {
        if (typeof onValueChange == 'undefined') {
            console.error('Function `onValueChange` is required');
        }
        if (typeof selectedValues == 'undefined') {
            console.error('Props `selectedValues` is required');
        }
    }, []);
    useEffect(() => {
        matchValues();
    }, [selectedValues]);
    const matchValues = () => {
        let newArr = options.reduce((prev, current) => {
            let data = returnDataType(current);
            return [...prev, data];
        }, []);
        for (const iterator of selectedValues) {
            if (typeof iterator == 'string') {
                let index = newArr.findIndex((it) => it == iterator);
                if (index >= 0) {
                    setAllItems(state => {
                        state[index].selected = true;
                        return JSON.parse(JSON.stringify(state));
                    });
                }
            }
            if (typeof iterator == 'object') {
                for (let i = 0; i < newArr.length; i++) {
                    let status = matchObject(newArr[i], iterator);
                    if (status) {
                        setAllItems(state => {
                            state[i].selected = true;
                            return JSON.parse(JSON.stringify(state));
                        });
                    }
                }
            }
        }
    };
    const matchObject = (obj1, obj2) => {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    };
    const onValueSelect = (item, index) => {
        if (item.selected) {
            let myData = returnDataType(item);
            let oldData = allItems.filter(it => it.selected).reduce((prev, current, currentIndex) => {
                let data = returnDataType(current);
                if (typeof data == 'string') {
                    if (data == myData) {
                        return prev;
                    }
                    else {
                        return [...prev, data];
                    }
                }
                if (typeof data == 'object') {
                    if (matchObject(data, myData)) {
                        return prev;
                    }
                    else {
                        return [...prev, data];
                    }
                }
            }, []);
            setAllItems(state => {
                state[index].selected = false;
                return JSON.parse(JSON.stringify(state));
            });
            onValueChange([...oldData]);
        }
        else {
            let newData = returnDataType(item);
            let oldData = allItems.filter(it => it.selected).reduce((prev, current) => {
                let data = returnDataType(current);
                return [...prev, data];
            }, []);
            onValueChange([...oldData, newData]);
        }
    };
    const getSelecetdValue = () => {
        let value = allItems.filter(it => it.selected).reduce((prev, current) => {
            return [...prev, current[labelKey]];
        }, []);
        return value.join(',');
    };
    return (React.createElement(Pressable, { style: [styles.container, inputContainerStyle], onPress: () => setModalVisiable(true) },
        React.createElement(Text, { style: [placeholderStyle] }, getSelecetdValue() == '' ? placeholder : getSelecetdValue()),
        React.createElement(Modal, { visible: modalVisiable, transparent: true, onRequestClose: () => setModalVisiable(false) },
            React.createElement(TouchableWithoutFeedback, { onPress: () => setModalVisiable(false) },
                React.createElement(View, { style: {
                        position: 'absolute',
                        height: height,
                        width: width,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'black',
                        opacity: 0.5
                    } })),
            React.createElement(View, { style: [{
                        flex: 1,
                        justifyContent: 'center'
                    }], pointerEvents: 'box-none' },
                React.createElement(View, { style: [{
                            backgroundColor: colors.pageBackgroundColor,
                            borderRadius: 8,
                            overflow: 'hidden',
                            marginHorizontal: width * 0.02
                        }, modalContainerStyle] },
                    React.createElement(Card, { style: {
                            paddingHorizontal: 15,
                            paddingVertical: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderRadius: 0
                        } },
                        React.createElement(Text.Heading, { title: modalHeading, style: [{
                                    fontSize: 20
                                }, modalHeadingTitle] }),
                        React.createElement(Icon, { ...closeIcon, onPress: () => setModalVisiable(false) })),
                    React.createElement(View, { style: {
                            maxHeight: height / 2.3
                        } },
                        React.createElement(FlatList, { data: allItems, renderItem: ({ item, index }) => {
                                return (React.createElement(Pressable, { style: [{
                                            height: 50,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            paddingHorizontal: 20,
                                            borderBottomWidth: 1,
                                            borderBottomColor: '#eaebeb'
                                        }, itemContainerStyle], onPress: () => {
                                        onValueSelect(item, index);
                                    } },
                                    React.createElement(Text, { style: [{
                                                fontSize: 15
                                            }, itemTextStyle] }, item[labelKey]),
                                    item.selected ?
                                        React.createElement(Icon, { ...selectedIcon })
                                        :
                                            null));
                            } })))))));
};
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 55,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    backdrop: {
        flex: 1,
        borderWidth: 0
    }
});
export default MultiSelectDropdown;
//# sourceMappingURL=MultiSelectDropdown.js.map