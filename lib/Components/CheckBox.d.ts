import React from 'react';
import { ColorValue, ViewStyle } from 'react-native';
interface Props {
    checked?: boolean;
    activeColor?: ColorValue;
    inactiveColor?: ColorValue;
    tintColor?: ColorValue;
    onChange?: (check: boolean) => void;
    size?: number;
    containerStyle?: ViewStyle;
}
declare const CheckBox: React.FC<Props>;
export default CheckBox;
