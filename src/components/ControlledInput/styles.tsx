import styled from 'styled-components';
import { TextInput } from 'react-native-paper';
import { Text } from 'react-native'
import { customFonts, customColors } from '../../theme';

export const ErrorText = styled(Text)`
    margin-left: 0px;
    margin-bottom: 10px;
    font-size: ${customFonts.small}px;
    color: ${customColors.error};
`;