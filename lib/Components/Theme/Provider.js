// //import liraries
// import React, { Component, useEffect } from 'react';
// import { View, Text, StyleSheet, ColorValue } from 'react-native';
// import { setThemeToGlobal } from './ThemeHooks';
// var initThemeData = {
//     light: {
//         primaryThemeColor: '#fff',
//         secondaryThemeColor: '#fff',
//         primaryFontColor: '#000',
//         secondaryFontColor: '#000',
//         cardColor: '#fff',
//         headerColor: 'blue',
//         pageBackgroundColor: '#fff',
//         tabBarColor: '#fff'
//     },
//     dark: {
//         primaryThemeColor: '#000',
//         secondaryThemeColor: '#000',
//         primaryFontColor: '#fff',
//         secondaryFontColor: '#fff',
//         cardColor: '#000',
//         headerColor: '#000',
//         pageBackgroundColor: '#000',
//         tabBarColor: '#000'
//     },
// }
// type ThemeProps = {
//     light: {
//         primaryThemeColor: ColorValue,
//         secondaryThemeColor: ColorValue,
//         primaryFontColor: ColorValue,
//         secondaryFontColor: ColorValue,
//         cardColor: ColorValue,
//         headerColor: ColorValue,
//         pageBackgroundColor: ColorValue,
//         tabBarColor: ColorValue
//     },
//     dark: {
//         primaryThemeColor: ColorValue,
//         secondaryThemeColor: ColorValue,
//         primaryFontColor: ColorValue,
//         secondaryFontColor: ColorValue,
//         cardColor: ColorValue,
//         headerColor: ColorValue,
//         pageBackgroundColor: ColorValue,
//         tabBarColor: ColorValue
//     }
// }
// type Props = {
//     children?: React.ReactNode,
//     theme?: ThemeProps
// }
// const Provider: React.FC<Props> = ({ children, theme = initThemeData }) => {
//     useEffect(() => {
//         setThemeToGlobal(theme);
//     },[])
//     return (
//         <View
//             style={{
//                 flex: 1
//             }}
//         >
//             {children}
//         </View>
//     );
// };
// // define your styles
// const styles = StyleSheet.create({
//     container: {
//     },
// });
// //make this component available to the app
// export default Provider;
// export {
//     ThemeProps,
//     initThemeData
// }
//import liraries
import React from 'react';
import { ThemeProvider } from './theming';
import InitThemeVal from './types';
const Provider = ({ children, theme, mode = 'light' }) => {
    const getTheme = () => {
        if (theme) {
            return mode == 'light' ? theme.light : theme.dark;
        }
        else {
            return mode == 'light' ? InitThemeVal.light : InitThemeVal.dark;
        }
    };
    return (React.createElement(ThemeProvider, { theme: getTheme() }, children));
};
//make this component available to the app
export default Provider;
//# sourceMappingURL=Provider.js.map