/// <reference types="react" />
declare const AppBar: import("react").FC<{
    title?: string | undefined;
    titlePosition?: "left" | "middle" | undefined;
    leftComponent?: "image" | "icon" | undefined;
    leftImage?: import("react-native").ImageSourcePropType | undefined;
    leftIcon?: import("../Icon").PropsOfIcon | undefined;
    leftImageStyle?: import("react-native").ImageStyle | undefined;
    backgroundColor?: import("react-native").ColorValue | undefined;
    style?: import("react-native").ViewStyle | undefined;
    barStyle?: "dark-content" | "light-content" | undefined;
    titleStyle?: import("react-native").TextStyle | import("react-native").ViewStyle | undefined;
    titleType?: "image" | "text" | undefined;
    titleImage?: import("react-native").ImageSourcePropType | undefined;
    titleImageStyle?: import("react-native").ImageStyle | undefined;
    rightActions?: {
        icon?: import("react").ReactNode;
        onPress?: (() => void) | undefined;
    }[] | undefined;
    shadow?: boolean | undefined;
    statusBarHidden?: boolean | undefined;
    statusBarTranslucent?: boolean | undefined;
    subTitle?: string | undefined;
    subTitleStyle?: import("react-native").TextStyle | undefined;
}> & {
    Back: import("react").FC<{
        title?: string | undefined;
        titlePosition?: "left" | "middle" | undefined;
        backgroundColor?: import("react-native").ColorValue | undefined;
        style?: import("react-native").ViewStyle | undefined;
        barStyle?: "dark-content" | "light-content" | undefined;
        titleStyle?: import("react-native").TextStyle | import("react-native").ViewStyle | undefined;
        titleType?: "image" | "text" | "textWithImage" | undefined;
        titleImage?: import("react-native").ImageSourcePropType | undefined;
        titleImageStyle?: import("react-native").ImageStyle | undefined;
        rightActions?: {
            icon?: import("react").ReactNode;
            onPress?: (() => void) | undefined;
        }[] | undefined;
        icon?: import("../Icon").PropsOfIcon | undefined;
        onLeftIconPress?: (() => void) | undefined;
        shadow?: boolean | undefined;
        statusBarHidden?: boolean | undefined;
        statusBarTranslucent?: boolean | undefined;
        subTitle?: string | undefined;
        subTitleStyle?: import("react-native").TextStyle | undefined;
        imageTitleContainerStyle?: import("react-native").ViewStyle | undefined;
    }>;
};
export default AppBar;
