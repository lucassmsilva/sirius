import { View, Text, ScrollView } from 'react-native';
import { Button } from "react-native-paper";

import styled from 'styled-components';

export const Container = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e3e3;
`;

export const LoginBox = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    margin: 0px 40px;
    elevation: 1;
`;

export const Title = styled(Text)`
    font-size: 42px;
    font-weight: bold;
    margin: 10px 0px;
`;

export const TextField = styled(View)`
    width: 90%;
`;

export const SubmitButton = styled(Button)`
    background-color: #0275d8;
    width: 60%;
`;

export const SubmitText = styled(Text)`
    color: #fff;
    font-weight: bold;
`;