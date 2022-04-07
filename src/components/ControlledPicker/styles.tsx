import { View } from "react-native";
import styled from "styled-components";
import { customColors } from "../../theme";

export const PickerField = styled(View)`
width: 100%;
height: 40px;
border: 1px solid;
border-color: ${customColors.grey}
`;