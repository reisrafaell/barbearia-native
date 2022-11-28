import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react/cjs/react.development";
import { BackgroundLinear } from "../Home/gradient";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../../components/input/index";
import ButtonComponent from "../../components/button/index";
import LinkComponent from "../../components/link/index";
import { AuthContex } from "../../contexts/auth";

import {
  Container,
  ImageComponet,
  TextComponet,
  TitleComponet,
  Button,
} from "./styles";

const Login = () => {
  const { loginUser, error } = useContext(AuthContex);

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginUser(email, password);
  };

  return (
    <BackgroundLinear>
      <Container>
        <Button onPress={() => navigation.navigate("Main")}>
          <Icon name="arrow-left" size={30} color="#fff" />
          <TextComponet m={"10px"} mb={"0"}>
            Voltar{" "}
          </TextComponet>
        </Button>

        <ImageComponet source={require("../../assets/logo.png")} />
        <TitleComponet>Barbearia Rei Do Corte</TitleComponet>
        <TextComponet>Já é cliente ? Faça Login</TextComponet>
        {error && (
          <TextComponet color="#c60d00">
            Usuário ou senha incorreto
          </TextComponet>
        )}

        <InputComponent
          showError={error}
          onChangeText={(value) => setEmail(value)}
          type="text"
          label="Email"
          placeholder="email@email.com"
        ></InputComponent>
        <InputComponent
          showError={error}
          onChangeText={(value) => setPassword(value)}
          type="password"
          label="Senha"
          placeholder="******"
        ></InputComponent>
        <LinkComponent
          textBefore="Não tem conta?"
          link="Cadrastre-se"
          onPress={() => navigation.navigate("Registration")}
        ></LinkComponent>
        <LinkComponent
          link="Esquceu a senha?"
          onPress={() => navigation.navigate("Reset")}
        ></LinkComponent>
        <ButtonComponent onPress={handleLogin} text="Entrar"></ButtonComponent>
      </Container>
    </BackgroundLinear>
  );
};

export default Login;
