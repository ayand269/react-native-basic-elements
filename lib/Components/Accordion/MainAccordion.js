//import liraries
import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from '../Icon';
import Text from '../Text';
import { useTheme } from '../Theme/theming';
var openedIcon = {
    name: 'chevron-up',
    type: 'Feather',
    size: 25
};
var closedIcon = {
    name: 'chevron-down',
    type: 'Feather',
    size: 25
};
const MainAccordion = ({ children, title, leftIcon, style, openIcon = openedIcon, closeIcon = closedIcon, titleStyle, containerStyle, shadow = false }) => {
    const colors = useTheme();
    const [open, setOpen] = useState(false);
    return (React.createElement(View, { style: [
            {
                backgroundColor: colors.cardColor,
                borderRadius: 8,
                shadowColor: colors.shadowColor
            },
            shadow ? styles.shadowView : null,
            containerStyle
        ] },
        React.createElement(Pressable, { style: styles.container, onPress: () => setOpen(!open) },
            leftIcon ?
                React.createElement(Icon, { ...leftIcon })
                :
                    null,
            React.createElement(View, { style: { flex: 1 } },
                React.createElement(Text, { style: [styles.titleStyle, titleStyle] }, title)),
            open ?
                React.createElement(Icon, { ...openIcon })
                :
                    React.createElement(Icon, { ...closeIcon })),
        open ?
            children
            :
                null));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleStyle: {
        marginLeft: 15,
        fontSize: 18
    },
    shadowView: {
        elevation: 5,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.7
    },
});
//make this component available to the app
export default MainAccordion;
//# sourceMappingURL=MainAccordion.js.map