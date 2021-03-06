import React from 'react'
import {  
    Container,
    FormWrap, 
    Icon, 
    FormContent,  
    Form, 
    FormH1,
    FormLable,
    FormInput,
    FormButton,
    Text
} from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Avdesh</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in your account</FormH1>
                            <FormLable htmlFor='for'>Email</FormLable>
                            <FormInput type='email' required />
                            <FormLable htmlFor='for'>Password</FormLable>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
