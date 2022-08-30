//import liraries
import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
const Card = ({ children, style, shadow = true, ...props }) => {
    return (React.createElement(Pressable, { style: [
            styles.container,
            shadow ? styles.shadowView : {},
            style
        ], ...props }, children));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 8
    },
    shadowView: {
        elevation: 5,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowColor: '#999',
        shadowRadius: 5,
        shadowOpacity: 0.7
    },
});
//make this component available to the app
export default Card;
//# sourceMappingURL=Card.js.map