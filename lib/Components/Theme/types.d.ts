import { ColorValue } from 'react-native';
declare const InitThemeVal: ReactNativeBasicElements.Theme;
declare global {
    namespace ReactNativeBasicElements {
        interface ThemeProps {
            primaryThemeColor: ColorValue;
            secondaryThemeColor: ColorValue;
            primaryFontColor: ColorValue;
            secondaryFontColor: ColorValue;
            cardColor: ColorValue;
            headerColor: ColorValue;
            pageBackgroundColor: ColorValue;
            tabBarColor: ColorValue;
            shadowColor: ColorValue;
            statusBarStyle: 'dark-content' | 'light-content';
            buttonColor: ColorValue;
            borderColor: ColorValue;
        }
        interface Theme {
            light?: ThemeProps;
            dark?: ThemeProps;
        }
    }
}
export default InitThemeVal;
