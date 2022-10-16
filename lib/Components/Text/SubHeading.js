//import liraries
import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../Theme/theming';
const SubHeading = ({ title, style, ...props }) => {
    const colors = useTheme();
    return (React.createElement(Text, { style: [
            {
                color: colors.secondaryFontColor
            },
            style
        ], ...props }, title));
};
export default SubHeading;
//# sourceMappingURL=SubHeading.js.map