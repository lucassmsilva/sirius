import styled from "styled-components";
import { TouchableOpacity, View } from 'react-native';
import { Button, Text } from "react-native-paper";

export const Background = styled(View)`
    flex: 1;
    background-color: #fff;
`;

export const TaskContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px 10px;
`;

export const TaskButton = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const TextField = styled(View)`
    width: 80%;
    height: 50px;
`;

export const Task = styled(Text)`
    font-size: 14px;
`;

export const BtnTitle = styled(Text)`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;

export const AddButton = styled(Button)`
    background-color: #00ff00;
    padding: 1px;
    margin: 2px 0px 0px 0px;
    border-radius: 8px;
`;

export const EditButton = styled(TouchableOpacity)`
    background-color: #0000ff;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const RemoveButton = styled(TouchableOpacity)`
    background-color: #ff0000;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;