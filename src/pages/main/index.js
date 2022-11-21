import React from "react";
import { BackgroundLinear } from "../Home/gradient";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/button/index";

import { Container, ImageComponet, TitleComponet } from "./styles";

const Main = () => {
  const navigation = useNavigation();

  return (
    <BackgroundLinear>
      <Container>
        <ImageComponet source={require("../../assets/logo.png")} />
        <TitleComponet>Barbearia Rei Do Corte</TitleComponet>

        <ButtonComponent
        m={"40px"}
          onPress={() => navigation.navigate("Login")}
          text="Área do Cliente"
        />
        <ButtonComponent
         m={"25px"}
          onPress={() => navigation.navigate("LoginSecondary")}
          text="Área do Barbeiro"
        ></ButtonComponent>
      </Container>
    </BackgroundLinear>
  );
};

export default Main;
