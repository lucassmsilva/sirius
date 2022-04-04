import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { DatePickerCustom } from "../ControlledDatePicker";
import ControledInput from "../ControlledInput/ControlledInput";
import { Container, LoginBox, SubmitButton, SubmitText, TextField, Title } from "./styles";


export default function LoginForm() {

    type LoginProps = {
        email: string;
        password: string;
    }
    
    const schema = yup.object({
        email: yup.string().email('Deve ser um email válido').required('Obrigatório'),
        password: yup.string().min(8, 'Minímo de 8 caracteres').required('Obrigatório'),
    }).required();
      
    const { control, handleSubmit, formState: { errors } } = useForm<LoginProps>({
        defaultValues: {
          email: '',
          password: '',
        },
        resolver: yupResolver(schema)
    });
    
    const onSubmit = data => console.log(data);
    

    return (
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
                    />

                </TextField>

                <TextField>
                    <ControledInput
                        control={control}
                        label="Senha"
                        type="text"
                        name="password"
                        required={false}
                    />
                </TextField>
                <SubmitButton onPress={handleSubmit(onSubmit)} title="Submit">
                    <SubmitText>Submit</SubmitText>
                </SubmitButton>
            </LoginBox>
        </Container>
    )
}