//import liraries
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from '../Icon';
import Text from '../Text';
const SubAccordion = ({ title, titleStyle, leftSpacing = true, leftIcon, style, onPress }) => {
    return (React.createElement(Pressable, { style: [styles.container, style], onPress: onPress },
        leftSpacing ?
            React.createElement(View, { style: {
                    width: 35
                } })
            :
                null,
        leftIcon ?
            React.createElement(Icon, { ...leftIcon })
            :
                null,
        React.createElement(View, null,
            React.createElement(Text, { style: [
                    {
                        fontSize: 16,
                        marginLeft: 15
                    },
                    titleStyle
                ] }, title))));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        minHeight: 60,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
});
//make this component available to the app
export default SubAccordion;
//# sourceMappingURL=SubAccordion.js.map