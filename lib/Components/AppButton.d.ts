import React from 'react';
import { ViewStyle, TextStyle, ColorValue, PressableProps } from 'react-native';
import { PropsOfIcon } from './Icon';
interface buttonIcon extends PropsOfIcon {
    position: 'left' | 'right';
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
}
declare const AppButton: React.FC<Props>;
export default AppButton;
