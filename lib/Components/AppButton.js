//import liraries
import React from 'react';
import { Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import Icon from './Icon';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from './Theme/theming';
const ButtonContaint = ({ title, textStyle, loader, buttonIcon, ripple }) => {
    return (React.createElement(React.Fragment, null));
};
const AppButton = ({ title, shadow = false, gradient = false, gradientColors = [], style, gradientEnd, gradientStart, gradientLocation, textStyle, loader, buttonIcon, ripple, ...props }) => {
    const colors = useTheme();
    return (React.createElement(React.Fragment, null, gradient ?
        React.createElement(LinearGradient, { style: [
                styles.container,
                shadow ? styles.shadowView : {},
                style
            ], colors: gradientColors, start: gradientStart, end: gradientEnd, locations: gradientLocation },
            (loader === null || loader === void 0 ? void 0 : loader.position) == 'left' ?
                React.createElement(ActivityIndicator, { style: {
                        marginRight: 10,
                        ...loader.style
                    }, color: loader.color ? loader.color : '#fff', size: loader.size })
                :
                    null,
            (buttonIcon === null || buttonIcon === void 0 ? void 0 : buttonIcon.position) == 'left' ?
                React.createElement(Icon, { style: {
                        marginRight: 10
                    }, color: buttonIcon.color ? buttonIcon.color : '#fff', ...buttonIcon })
                :
                    null,
            title ?
                React.createElement(Text, { style: [styles.textStyle, textStyle] }, title)
                :
                    null,
            (buttonIcon === null || buttonIcon === void 0 ? void 0 : buttonIcon.position) == 'right' ?
                React.createElement(Icon, { style: {
                        marginLeft: 10
                    }, color: buttonIcon.color ? buttonIcon.color : '#fff', ...buttonIcon })
                :
                    null,
            (loader === null || loader === void 0 ? void 0 : loader.position) == 'right' ?
                React.createElement(ActivityIndicator, { style: {
                        marginLeft: 10,
                        ...loader.style
                    }, color: loader.color ? loader.color : '#fff', size: loader.size })
                :
                    null)
        :
            React.createElement(Pressable, { style: [
                    styles.container,
                    shadow ? styles.shadowView : null,
                    {
                        backgroundColor: colors.buttonColor,
                        shadowColor: colors.shadowColor
                    },
                    style
                ], ...props },
                (loader === null || loader === void 0 ? void 0 : loader.position) == 'left' ?
                    React.createElement(ActivityIndicator, { style: {
                            marginRight: 10,
                            ...loader.style
                        }, color: loader.color ? loader.color : colors.primaryFontColor, size: loader.size })
                    :
                        null,
                (buttonIcon === null || buttonIcon === void 0 ? void 0 : buttonIcon.position) == 'left' ?
                    React.createElement(Icon, { style: {
                            marginRight: 10
                        }, color: buttonIcon.color ? buttonIcon.color : colors.primaryFontColor, ...buttonIcon })
                    :
                        null,
                title ?
                    React.createElement(Text, { style: [styles.textStyle, {
                                color: colors.primaryFontColor
                            }, textStyle] }, title)
                    :
                        null,
                (buttonIcon === null || buttonIcon === void 0 ? void 0 : buttonIcon.position) == 'right' ?
                    React.createElement(Icon, { style: {
                            marginLeft: 10
                        }, color: buttonIcon.color ? buttonIcon.color : colors.primaryFontColor, ...buttonIcon })
                    :
                        null,
                (loader === null || loader === void 0 ? void 0 : loader.position) == 'right' ?
                    React.createElement(ActivityIndicator, { style: {
                            marginLeft: 10,
                            ...loader.style
                        }, color: loader.color ? loader.color : colors.primaryFontColor, size: loader.size })
                    :
                        null)));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        marginHorizontal: 20,
        borderRadius: 8,
        flexDirection: 'row',
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
    textStyle: {
        fontSize: 18,
        color: '#fff',
    }
});
//make this component available to the app
export default AppButton;
//# sourceMappingURL=AppButton.js.map