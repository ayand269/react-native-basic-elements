declare const Accordion: (({ children, title, leftIcon, style, openIcon, closeIcon, titleStyle, containerStyle, customElement, bottomElement, shadow, inputStyle }: {
    children?: import("react").ReactNode;
    title?: string | undefined;
    leftIcon?: import("../Icon").PropsOfIcon | undefined;
    style?: import("react-native").ViewStyle | undefined;
    openIcon?: import("../Icon").PropsOfIcon | undefined;
    closeIcon?: import("../Icon").PropsOfIcon | undefined;
    titleStyle?: import("react-native").TextStyle | undefined;
    containerStyle?: import("react-native").ViewStyle | undefined;
    shadow?: boolean | undefined;
    customElement?: import("react").ReactNode;
    bottomElement?: import("react").ReactNode;
    inputStyle?: import("react-native").ViewStyle | undefined;
}) => JSX.Element) & {
    Item: ({ title, titleStyle, leftSpacing, leftIcon, style, onPress }: {
        title?: string | undefined;
        titleStyle?: import("react-native").TextStyle | undefined;
        leftSpacing?: boolean | undefined;
        leftIcon?: import("../Icon").PropsOfIcon | undefined;
        style?: import("react-native").ViewStyle | undefined;
        onPress?: (() => void) | undefined;
    }) => JSX.Element;
    Custom: ({ style, onPress, children, leftSpacing }: {
        style?: import("react-native").ViewStyle | undefined;
        onPress?: (() => void) | undefined;
        children: import("react").ReactNode;
        leftSpacing?: boolean | undefined;
    }) => JSX.Element;
};
export default Accordion;
