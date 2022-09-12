declare const Accordion: (({ children, title, leftIcon, style, openIcon, closeIcon, titleStyle, containerStyle, shadow }: {
    children?: import("react").ReactNode;
    title?: string | undefined;
    leftIcon?: import("../Icon").PropsOfIcon | undefined;
    style?: import("react-native").ViewStyle | undefined;
    openIcon?: import("../Icon").PropsOfIcon | undefined;
    closeIcon?: import("../Icon").PropsOfIcon | undefined;
    titleStyle?: import("react-native").TextStyle | undefined;
    containerStyle?: import("react-native").ViewStyle | undefined;
    shadow?: boolean | undefined;
}) => JSX.Element) & {
    Item: ({ title, titleStyle, leftSpacing, leftIcon, style, onPress }: {
        title?: string | undefined;
        titleStyle?: import("react-native").TextStyle | undefined;
        leftSpacing?: boolean | undefined;
        leftIcon?: import("../Icon").PropsOfIcon | undefined;
        style?: import("react-native").ViewStyle | undefined;
        onPress?: (() => void) | undefined;
    }) => JSX.Element;
};
export default Accordion;
