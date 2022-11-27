import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { BackgroundLinear } from "../Home/gradient";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../../components/input/index";
import ButtonComponent from "../../components/button/index";
import LinkComponent from "../../components/link/index";
import { auth } from "../../config/firebase";

import {
  Container,
  ImageComponet,
  TextComponet,
  TitleComponet,
} from "./styles";
const Registration = () => {
  const navigation = useNavigation();
  const [emailOne, setEmailOne] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const validEmail = () => {
    const regex = RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i);
    const regexTest = regex.test(emailOne);

    if (regexTest) {
      setValid(true);
    }
    setValid(false);
  };

  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (value) => {
        alert("Cadastrado com sucesso!");
      }
    );
  };

  const handleSubmit = () => {
    if (emailOne && email && password) {
      if (valid && emailOne === email) {
        createUser();
      } else {
        if (!valid) {
          alert("Formato de email inválido");
        }
        if (emailOne !== email) {
          alert("Os campos não conferem.");
        }
      }
    } else {
      alert("Preencha os campos!");
    }
  };

  return (
    <BackgroundLinear>
      <Container>
        <ImageComponet source={require("../../assets/logo.png")} />
        <TitleComponet>Barbearia Rei Do Corte</TitleComponet>
        <TextComponet>Registre-se</TextComponet>

        <InputComponent
          type="text"
          label="Email"
         
          placeholder="email@email.com"
          onChangeText={(value) => setEmailOne(value)}
        />
        <InputComponent
          type="text"
          label="Confirme o Email"
          
          placeholder="email@email.com"
          onChangeText={(value) => setEmail(value)}
        />
        <InputComponent
          type="password"
          label="Senha"
          placeholder="******"
          onChangeText={(value) => setPassword(value)}
        />
        <LinkComponent
          textBefore="Já tem conta?"
          link="Entrar"
          onPress={() => navigation.navigate("Login")}
        />
        <ButtonComponent onPress={handleSubmit} text="Cadastrar" />
      </Container>
    </BackgroundLinear>
  );
};

export default Registration;
