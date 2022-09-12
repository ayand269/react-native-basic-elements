import { TextProps, TextStyle } from 'react-native';
declare type Props = TextProps & {
    title?: string;
    style?: TextStyle;
};
declare const SubHeading: ({ title, style, ...props }: Props) => JSX.Element;
export default SubHeading;
