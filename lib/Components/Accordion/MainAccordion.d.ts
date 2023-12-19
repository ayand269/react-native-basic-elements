import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { PropsOfIcon } from '../Icon';
declare type Props = {
    children?: React.ReactNode;
    title?: string;
    leftIcon?: PropsOfIcon;
    style?: ViewStyle;
    openIcon?: PropsOfIcon;
    closeIcon?: PropsOfIcon;
    titleStyle?: TextStyle;
    containerStyle?: ViewStyle;
    shadow?: boolean;
    customElement?: ReactNode;
    bottomElement?: ReactNode;
    inputStyle?: ViewStyle;
};
declare const MainAccordion: ({ children, title, leftIcon, style, openIcon, closeIcon, titleStyle, containerStyle, customElement, bottomElement, shadow, inputStyle }: Props) => JSX.Element;
export default MainAccordion;
