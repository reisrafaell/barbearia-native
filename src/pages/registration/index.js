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
    const regex = RegExp(/[a-z-A-Z][@][a-z]*\.[a-z]{3}/);
    const regexTest = regex.test(email);

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

  const handleSubmit=()=>{
    if( emailOne === email){
      createUser()
    }else{
      alert('Os campos não conferem.')
    }
  }

  return (
    <BackgroundLinear>
      <Container>
        <ImageComponet source={require("../../assets/logo.png")} />
        <TitleComponet>Barbearia Rei Do Corte</TitleComponet>
        <TextComponet>Registre-se</TextComponet>

        <InputComponent
          type="text"
          label="Email"
          onBlur={validEmail}
          placeholder="email@email.com"
          onChangeText={(value) => setEmailOne(value)}
        />
        <InputComponent
          type="text"
          label="Confirme o Email"
          onBlur={validEmail}
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
