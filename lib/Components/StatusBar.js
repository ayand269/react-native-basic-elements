//import liraries
import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar as RNStatusBar } from 'react-native';
import { useTheme } from './Theme/theming';
const StatusBar = ({ backgroundColor, barStyle, hidden = false, translucent = false, ...props }) => {
    const colors = useTheme();
    return (React.createElement(View, null,
        !translucent ?
            React.createElement(SafeAreaView, { style: {
                    backgroundColor: backgroundColor ? backgroundColor : colors.headerColor
                } })
            :
                null,
        React.createElement(RNStatusBar, { backgroundColor: backgroundColor ? backgroundColor : colors.headerColor, barStyle: barStyle ? barStyle : colors.statusBarStyle, hidden: hidden, translucent: translucent, ...props })));
};
// define your styles
const styles = StyleSheet.create({
    container: {},
});
//make this component available to the app
export default StatusBar;
//# sourceMappingURL=StatusBar.js.map