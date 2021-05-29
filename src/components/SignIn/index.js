import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormInputMsg
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>AstroDev</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Envoyer votre demande de devis</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Numero de téléphone</FormLabel>
              <FormInput type='text' required />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormInputMsg type='text' required />
              <FormButton type='submit'>Envoyer</FormButton>
            <Text>Tel: 06.74.57.86.68</Text>
            <Text>E-mail: contact@AstroDev.com</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
