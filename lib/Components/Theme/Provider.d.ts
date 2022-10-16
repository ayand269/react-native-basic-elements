import React from 'react';
declare type Props = {
    children?: React.ReactNode;
    theme?: ReactNativeBasicElements.Theme;
    mode?: 'light' | 'dark';
};
declare const Provider: ({ children, theme, mode }: Props) => JSX.Element;
export default Provider;
