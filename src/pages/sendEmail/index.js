import { useState } from "react";
import { BackgroundLinear } from "../Home/gradient";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../../components/input/index";
import ButtonComponent from "../../components/button/index";
import LinkComponent from "../../components/link/index";

import {
  Container,
  ImageComponet,
  TextComponet,
  TitleComponet,
} from "./styles";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";
const SendEmail = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const reset = async () => {
    await sendPasswordResetEmail(auth, email)
      .then((value) => {
        alert("Enviado com sucesso! Verifique sua caixa de entrada.");
      })
      .catch((error) => {
        alert("E-mail não cadastrado!");
      });
  };

  return (
    <BackgroundLinear>
      <Container>
        <ImageComponet source={require("../../assets/logo.png")} />
        <TitleComponet>Barbearia Rei Do Corte</TitleComponet>
        <TextComponet>Enviar um e-mail de redefinição de senha</TextComponet>

        <InputComponent
          onChangeText={(value) => setEmail(value)}
          type="text"
          label="Email"
          placeholder="email@email.com"
        ></InputComponent>

        <LinkComponent
          link="Voltar"
          onPress={() => navigation.navigate("Login")}
        />
        <ButtonComponent onPress={reset} text="Enviar"></ButtonComponent>
      </Container>
    </BackgroundLinear>
  );
};

export default SendEmail;
