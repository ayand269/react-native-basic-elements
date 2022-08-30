import React, { ReactNode } from 'react';
import { ViewStyle, PressableProps } from 'react-native';
interface Props extends PressableProps {
    children?: ReactNode;
    style?: ViewStyle;
    shadow?: boolean;
}
declare const Card: React.FC<Props>;
export default Card;
