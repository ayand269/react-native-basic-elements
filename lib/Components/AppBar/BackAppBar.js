//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icon from '../Icon';
import StatusBar from '../StatusBar';
import { useTheme } from '../Theme/theming';
const BackAppBar = ({ title, titlePosition = 'middle', backgroundColor, style, icon, onLeftIconPress, barStyle, titleStyle, titleType = 'text', titleImage, titleImageStyle, rightActions = [], shadow }) => {
    const colors = useTheme();
    return (React.createElement(View, { style: [
            shadow ? styles.shadowView : null,
            {
                backgroundColor: backgroundColor ? backgroundColor : colors.headerColor,
                shadowColor: colors.shadowColor
            }
        ] },
        React.createElement(StatusBar, { backgroundColor: backgroundColor ? backgroundColor : colors.headerColor, barStyle: barStyle ? barStyle : colors.statusBarStyle }),
        React.createElement(View, { style: [
                styles.container,
                style,
                {
                    backgroundColor: backgroundColor ? backgroundColor : colors.headerColor
                }
            ] },
            React.createElement(Pressable, { onPress: onLeftIconPress ? onLeftIconPress : null },
                React.createElement(Icon, { name: icon ? icon.name : 'arrow-back', type: icon ? icon.type : 'Ionicon', color: icon ? icon.color : undefined, size: icon ? icon.size : 27, style: icon === null || icon === void 0 ? void 0 : icon.style })),
            React.createElement(View, { style: {
                    flex: 1,
                    paddingHorizontal: 10
                } }, titleType == 'text' ?
                React.createElement(Text, { style: {
                        textAlign: titlePosition == 'middle' ? 'center' : 'left',
                        fontSize: 18,
                        color: colors.primaryFontColor,
                        ...titleStyle
                    } }, title)
                :
                    titleImage ?
                        React.createElement(Image, { source: titleImage, style: {
                                height: 40,
                                borderRadius: 20,
                                ...titleImageStyle
                            }, resizeMode: 'contain' })
                        :
                            null),
            React.createElement(View, { style: {
                    flexDirection: 'row',
                    minWidth: 40
                } }, rightActions.map((item, index) => {
                return (React.createElement(Pressable, { key: index, onPress: item.onPress ? item.onPress : null }, item.icon));
            })))));
};
// define your styles
const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    shadowView: {
        elevation: 5,
        shadowOffset: {
            height: 3,
            width: 3
        },
        shadowColor: '#1E1E1E',
        shadowRadius: 5,
        shadowOpacity: 0.7
    },
});
//make this component available to the app
export default BackAppBar;
//# sourceMappingURL=BackAppBar.js.map