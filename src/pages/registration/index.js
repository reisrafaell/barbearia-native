import { BackgroundLinear } from "../Home/gradient";
import { useNavigation } from '@react-navigation/native';
import  InputComponent from "../../components/input/index"
import ButtonComponent from "../../components/button/index"
import LinkComponent from "../../components/link/index"

import { Container,ImageComponet, TextComponet, TitleComponet } from "./styles";
const Registration = () => {
  const navigation = useNavigation(); 
  return (
    <BackgroundLinear>
      <Container>
        <ImageComponet source={require("../../assets/logo.png")}/>
        <TitleComponet>Barbearia Padawas</TitleComponet>
        <TextComponet>Registre-se</TextComponet>
        <InputComponent type="text" label="Nome"  placeholder="Rafael Reis"></InputComponent>
        <InputComponent type="text" label="Email"  placeholder="email@email.com"></InputComponent>
        <InputComponent type="password" label="Senha"  placeholder="******"></InputComponent>
        <LinkComponent textBefore="Já tem conta?" link="Entrar" onPress={() => navigation.navigate('Login')}></LinkComponent>     
        <ButtonComponent text="Cadastrar"></ButtonComponent>
   
        
      </Container>
    </BackgroundLinear>
  );
};

export default Registration;
