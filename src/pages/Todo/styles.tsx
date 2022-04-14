import styled from "styled-components";
import { TouchableOpacity, View } from 'react-native';
import { Button, Text } from "react-native-paper";
import { customColors } from "../../theme";

export const Background = styled(View)`
    flex: 1;
    background-color: #fff;
`;

export const TopBar = styled(View)`
    flex-direction: row;
    height: 40px;
    background-color: #fff;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
`;

export const Label = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 10px;
`;

export const TaskContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px 10px;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-color: #c0c0c0;
`;

export const ModalBackground = styled(View)`
    background-color: #fff;
    height: 160px;
    justify-content: center;
    border-radius: 10px;
    margin: 0px 20px;
`;

export const FormContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    margin: 5px 10px;
    padding-bottom: 10px;
`;

export const TaskButton = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const TextField = styled(View)`
    flex: 1;
    height: 50px;
`;

export const Task = styled(Text)`
    font-size: 18px;
`;

export const BtnTitle = styled(Text)`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;

export const AddButton = styled(Button)`
    background-color: ${customColors.primary};
    margin-top: 4px;
`;

export const EditButton = styled(TouchableOpacity)`
    background-color: ${customColors.secondary};
    margin-top: 4px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const RemoveButton = styled(TouchableOpacity)`
    margin-top: 4px;
    background-color: ${customColors.danger};
    padding: 10px;
    align-items: center;
    justify-content: center;
`;