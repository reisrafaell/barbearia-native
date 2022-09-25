import { BackgroundLinear } from "../Home/gradient";
import { useNavigation } from '@react-navigation/native';
import  InputComponent from "../../components/input/index"
import ButtonComponent from "../../components/button/index"
import LinkComponent from "../../components/link/index"

import { Container,ImageComponet, TextComponet, TitleComponet } from "./styles";
const Login = () => {
  const navigation = useNavigation(); 

  const handleSubmit = () => {
  alert("olá")
  navigation.navigate('Home')
  };

  
  return (
    <BackgroundLinear>
      <Container>
        <ImageComponet source={require("../../assets/logo.png")}/>
        <TitleComponet>Barbearia Padawas</TitleComponet>
        <TextComponet>Login</TextComponet>

        <InputComponent type="text" label="Email"  placeholder="email@email.com"></InputComponent>
        <InputComponent type="password" label="Senha"  placeholder="******"></InputComponent>
        <LinkComponent textBefore="Não tem conta?" link="Cadrastre-se" onPress={() => navigation.navigate('Registration')}></LinkComponent>     
        <LinkComponent  link="Esquceu a senha?"></LinkComponent>     
        <ButtonComponent onPress={handleSubmit} text="Entrar"></ButtonComponent>
   
        
      </Container>
    </BackgroundLinear>
  );
};

export default Login;
