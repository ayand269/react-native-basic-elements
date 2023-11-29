import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle, ColorValue, PressableProps } from 'react-native';
import { PropsOfIcon } from './Icon';
interface buttonIcon extends PropsOfIcon {
    position: 'left' | 'right';
}
interface CustomComponent {
    position: 'left' | 'right';
    children: ReactNode;
}
interface Props extends PressableProps {
    title?: string;
    shadow?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    loader?: {
        position: 'left' | 'right';
        color?: ColorValue;
        size?: 'large' | 'small';
        style?: ViewStyle;
    };
    buttonIcon?: buttonIcon;
    ripple?: {
        show?: boolean;
        color?: ColorValue;
        borderless?: boolean;
        radius?: number;
        foreground?: boolean;
    };
    gradient?: boolean;
    gradientColors?: (string | number)[];
    gradientStart?: {
        x: number;
        y: number;
    };
    gradientEnd?: {
        x: number;
        y: number;
    };
    gradientLocation?: number[];
    onPress?: () => void;
    customeElement?: CustomComponent;
}
declare const AppButton: React.FC<Props>;
export default AppButton;
