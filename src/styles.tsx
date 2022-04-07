import styled from 'styled-components';
import { Text } from 'react-native'
import { customFonts, customColors } from './theme';

export const ErrorText = styled(Text)`
    font-size: ${customFonts.small}px;
    color: ${customColors.error};
`;