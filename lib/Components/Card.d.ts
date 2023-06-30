import React, { ReactNode } from 'react';
import { ViewStyle, PressableProps } from 'react-native';
interface Props extends PressableProps {
    children?: ReactNode;
    style?: ViewStyle;
    shadow?: boolean;
    elevation?: number;
    shadowOffsetHeight?: number;
    shadowOffsetwidth?: number;
}
declare const Card: React.FC<Props>;
export default Card;
