import React, { ReactElement } from 'react';
import { TextInputProps, ViewStyle, TextStyle, ColorValue } from 'react-native';
declare type Props = TextInputProps & {
    placeholder?: string;
    borderWidth?: number;
    containerStyle?: ViewStyle;
    placeholderTextStyle?: TextStyle;
    rightAction?: ReactElement;
    rightActionButtonStyle?: ViewStyle;
    onRightIconPress?: () => void;
    value?: string;
    onChangeText?: (value: string) => void;
    inputStyle?: TextStyle | ViewStyle;
    inputHeight?: number;
    backgroundColor?: ColorValue;
    placeholderTextSize?: number;
};
declare const AppTextInputOutlined: React.FC<Props>;
export default AppTextInputOutlined;
