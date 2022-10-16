/// <reference types="react" />
export declare const ThemeProvider: import("react").ComponentType<{
    theme?: ReactNativeBasicElements.ThemeProps | undefined;
}>, withTheme: <Props extends {
    theme: ReactNativeBasicElements.ThemeProps;
}, C>(WrappedComponent: import("react").ComponentType<Props> & C) => import("react").ComponentType<import("@callstack/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativeBasicElements.ThemeProps> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Props> & C, {}>, useTheme: <T = ReactNativeBasicElements.ThemeProps>(overrides?: import("@callstack/react-theme-provider").$DeepPartial<T> | undefined) => T;
