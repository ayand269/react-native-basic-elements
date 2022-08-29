import React from 'react';
import { ViewStyle, ColorValue } from 'react-native';
interface Props {
    selected?: boolean;
    size?: number;
    containerStyle?: ViewStyle;
    activeColor?: ColorValue;
    inactiveColor?: ColorValue;
    onChange?: (selected: boolean) => void;
}
declare const RadioButton: React.FC<Props>;
export default RadioButton;
