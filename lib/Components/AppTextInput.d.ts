import React, { ReactElement } from 'react';
import { TextStyle, ViewStyle, TextInputProps } from 'react-native';
import { PropsOfIcon } from './Icon';
interface Props extends TextInputProps {
    inputStyle?: TextStyle | ViewStyle;
    mainContainerStyle?: ViewStyle;
    leftIcon?: PropsOfIcon;
    rightAction?: ReactElement;
    rightActionButtonStyle?: ViewStyle;
    inputContainerStyle?: ViewStyle;
    onRightIconPress?: () => void;
    title?: string;
    allowFontScaling?: boolean;
    titleStyle?: TextStyle;
}
declare const AppTextInput: React.FC<Props>;
export default AppTextInput;
