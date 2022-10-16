//import liraries
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useTheme } from './Theme/theming';
const Card = ({ children, style, shadow = true, ...props }) => {
    const colors = useTheme();
    return (React.createElement(Pressable, { style: [
            styles.container,
            shadow ? styles.shadowView : null,
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