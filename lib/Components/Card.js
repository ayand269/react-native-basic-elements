//import liraries
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useTheme } from './Theme/theming';
const Card = ({ children, style, shadow = true, elevation = 5, shadowOffsetHeight = 3, shadowOffsetwidth = 3, ...props }) => {
    const colors = useTheme();
    return (React.createElement(Pressable, { style: [
            styles.container,
            shadow ? {
                elevation: elevation,
                shadowOffset: {
                    height: shadowOffsetHeight,
                    width: shadowOffsetwidth
                },
                shadowRadius: 5,
                shadowOpacity: 0.7
            } : null,
            {
                backgroundColor: colors.cardColor,
                shadowColor: colors.shadowColor
            },
            style
        ], ...props }, children));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 8
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
export default Card;
//# sourceMappingURL=Card.js.map