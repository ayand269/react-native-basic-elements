//import liraries
import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar as RNStatusBar } from 'react-native';
const StatusBar = ({ backgroundColor = '#fff', barStyle = 'dark-content', hidden = false, translucent = false }) => {
    return (React.createElement(View, null,
        !translucent ?
            React.createElement(SafeAreaView, { style: {
                    backgroundColor: backgroundColor
                } })
            :
                null,
        React.createElement(RNStatusBar, { backgroundColor: backgroundColor, barStyle: barStyle, hidden: hidden, translucent: translucent })));
};
// define your styles
const styles = StyleSheet.create({
    container: {},
});
//make this component available to the app
export default StatusBar;
//# sourceMappingURL=StatusBar.js.map