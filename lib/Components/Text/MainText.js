//import liraries
import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../Theme/theming';
const MainText = ({ children, style, ...props }) => {
    const colors = useTheme();
    return (React.createElement(Text, { style: [
            {
                color: colors.primaryFontColor
            },
            style
        ], ...props }, children));
};
export default MainText;
//# sourceMappingURL=MainText.js.map