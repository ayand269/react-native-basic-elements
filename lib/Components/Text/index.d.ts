declare const Text: (({ children, style, ...props }: import("react-native").TextProps & {
    children?: import("react").ReactNode;
    style?: import("react-native").TextStyle | undefined;
}) => JSX.Element) & {
    Heading: ({ title, style, ...props }: import("react-native").TextProps & {
        title?: string | undefined;
        style?: import("react-native").TextStyle | undefined;
    }) => JSX.Element;
    SubHeading: ({ title, style, ...props }: import("react-native").TextProps & {
        title?: string | undefined;
        style?: import("react-native").TextStyle | undefined;
    }) => JSX.Element;
};
export default Text;
