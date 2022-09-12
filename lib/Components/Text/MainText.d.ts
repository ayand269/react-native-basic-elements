import React from 'react';
import { TextProps, TextStyle } from 'react-native';
declare type Props = TextProps & {
    children?: React.ReactNode;
    style?: TextStyle;
};
declare const MainText: ({ children, style, ...props }: Props) => JSX.Element;
export default MainText;
