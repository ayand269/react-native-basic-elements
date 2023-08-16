/// <reference types="react" />
declare const AppTextInput: import("react").FC<import("react-native").TextInputProps & {
    inputStyle?: import("react-native").TextStyle | import("react-native").ViewStyle | undefined;
    mainContainerStyle?: import("react-native").ViewStyle | undefined;
    leftIcon?: import("../Icon").PropsOfIcon | undefined;
    rightAction?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    rightActionButtonStyle?: import("react-native").ViewStyle | undefined;
    inputContainerStyle?: import("react-native").ViewStyle | undefined;
    onRightIconPress?: (() => void) | undefined;
    title?: string | undefined;
    allowFontScaling?: boolean | undefined;
    titleStyle?: import("react-native").TextStyle | undefined;
    value?: string | undefined;
    onChnageText?: ((text: string) => void) | undefined;
}> & {
    Outlined: import("react").FC<import("react-native").TextInputProps & {
        placeholder?: string | undefined;
        borderWidth?: number | undefined;
        activeBorderColor?: import("react-native").ColorValue | undefined;
        inactiveBorderColor?: import("react-native").ColorValue | undefined;
        containerStyle?: import("react-native").ViewStyle | undefined;
        placeholderTextStyle?: import("react-native").TextStyle | undefined;
        placeholderTextColor?: import("react-native").ColorValue | undefined;
        rightAction?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
        rightActionButtonStyle?: import("react-native").ViewStyle | undefined;
        onRightIconPress?: (() => void) | undefined;
        value?: string | undefined;
        onChangeText?: ((value: string) => void) | undefined;
        inputStyle?: import("react-native").TextStyle | import("react-native").ViewStyle | undefined;
        inputHeight?: number | undefined;
        backgroundColor?: import("react-native").ColorValue | undefined;
        placeholderTextSize?: number | undefined;
    }>;
};
export default AppTextInput;
