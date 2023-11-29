//import liraries
import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
const CustomeAccordion = ({ style, onPress, children, leftSpacing = true }) => {
    return (React.createElement(Pressable, { style: [styles.container, style], onPress: onPress },
        leftSpacing ?
            React.createElement(View, { style: {
                    width: 35
                } })
            :
                null,
        children));
};
const styles = StyleSheet.create({
    container: {
        minHeight: 60,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
});
export default CustomeAccordion;
//# sourceMappingURL=CustomeAccordion.js.map