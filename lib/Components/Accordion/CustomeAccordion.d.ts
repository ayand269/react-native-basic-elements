import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
declare type Props = {
    style?: ViewStyle;
    onPress?: () => void;
    children: ReactNode;
    leftSpacing?: boolean;
};
declare const CustomeAccordion: ({ style, onPress, children, leftSpacing }: Props) => JSX.Element;
export default CustomeAccordion;
