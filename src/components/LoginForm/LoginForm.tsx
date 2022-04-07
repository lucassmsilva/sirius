import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ControledInput from "../ControlledInput/ControlledInput";
import { Container, LoginBox, SubmitButton, SubmitText, TextField, Title } from "./styles";
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import ControlledPicker from "../ControlledPicker/ControlledPicker";


export default function LoginForm() {

    type LoginProps = {
        email: string;
        password: string;
        picker: string;
    }
    
    const schema = yup.object({
        email: yup.string().email('Deve ser um email válido').required('Obrigatório'),
        password: yup.string().min(8, 'Minímo de 8 caracteres').required('Obrigatório'),
        picker: yup.string().required('Obrigatório'),
    }).required();
      
    const { control, handleSubmit, formState: { errors } } = useForm<any>({
        defaultValues: {
          email: '',
          password: '',
        },
        resolver: yupResolver(schema)
    });
    
    const onSubmit = data => console.log(data);

    let pickerOptions = [
        {
            label: 'Selecione',
            value: ''
        },
        {
            label: 'Java',
            value: 'java'
        },
        {
            label: 'Javascript',
            value: 'js'
        },
        {
            label: 'PYTHON',
            value: 'py'
        },
    ];
    

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                    <LoginBox>
                        <Title>Login</Title>
                        <TextField>
                            <ControledInput
                                control={control}
                                label="Email"
                                type="text"
                                name="email"
                                required={false}
                                icon='email'
                            />
                        </TextField>

                        <TextField>
                            <ControledInput
                                control={control}
                                label="Senha"
                                type="password"
                                name="password"
                                required={false}
                                icon='eye'
                            />
                        </TextField>
                    
                    <TextField>
                        <ControlledPicker
                                control={control}
                                name="picker"
                                items={pickerOptions}
                                required={false}
                        />
                    </TextField>


                    <View style={{alignItems: 'center', width: '100%'}}>
                        <SubmitButton onPress={handleSubmit(onSubmit)} title="Submit">
                            <SubmitText>Entrar</SubmitText>
                        </SubmitButton>
                    </View>
                    </LoginBox>
            </Container>
        </TouchableWithoutFeedback>
    )
}