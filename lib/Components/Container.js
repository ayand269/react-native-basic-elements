//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from './Theme/theming';
const Container = ({ style, children, ...props }) => {
    const colors = useTheme();
    return (React.createElement(View, { style: [
            styles.container,
            {
                backgroundColor: colors.pageBackgroundColor
            },
            style
        ], ...props }, children));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
//make this component available to the app
export default Container;
//# sourceMappingURL=Container.js.map