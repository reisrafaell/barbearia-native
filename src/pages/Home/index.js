import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackgroundLinear } from "./gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Container,
  TextComponet,
  TabBottom,
  ImageComponetBotton,
  ContentBotton,
  ImageComponet,
  TitleComponet,
  TextServices,
  Services,
  ButtonServices,
  TextButtonServices,
  ButtonHandle,
  Content,
  Button,
} from "./styles";
import { AuthContex } from "../../contexts/auth";

const Home = () => {
  const navigation = useNavigation();

  const { handleServices, logout } = useContext(AuthContex);
  const [corte, setCorte] = useState(false);
  const [limpeza, setLimpeza] = useState(false);
  const [sombrancelha, setSombrancelha] = useState(false);
  const [barba, setBarba] = useState(false);
  const [services, setServices] = useState({
    corte: false,
    limpeza: false,
    sombrancelha: false,
    barba: false,
  });



  const handleSubmit = () => {
    handleServices(services);
    navigation.navigate("Schedule");
  };
  return (
    <BackgroundLinear>
      <Container>
        <TitleComponet>Home</TitleComponet>
        <ImageComponet source={require("../../assets/main.png")} />
        <TextComponet>Serviços</TextComponet>
        <Content>
          <Services>
            <TextServices>Corte Masculino</TextServices>

            <ButtonServices
              selected={corte}
              onPress={() => {
                setCorte(corte ? false : true);
                setServices((prev) => {
                  return { ...prev, corte: corte ? false : true };
                });
              }}
            >
              <TextButtonServices>Selecionar</TextButtonServices>
            </ButtonServices>
          </Services>
          <Services>
            <TextServices>Limpeza de Rosto</TextServices>
            <ButtonServices
              selected={limpeza}
              onPress={() => {
                setLimpeza(limpeza ? false : true);
                setServices((prev) => {
                  return { ...prev, limpeza: limpeza ? false : true };
                });
              }}
            >
              <TextButtonServices>Selecionar</TextButtonServices>
            </ButtonServices>
          </Services>
          <Services>
            <TextServices>Sombrancelha</TextServices>
            <ButtonServices
              selected={sombrancelha}
              onPress={() => {
                setSombrancelha(sombrancelha ? false : true);
                setServices((prev) => {
                  return { ...prev, sombrancelha: sombrancelha ? false : true };
                });
              }}
            >
              <TextButtonServices>Selecionar</TextButtonServices>
            </ButtonServices>
          </Services>
          <Services>
            <TextServices>Barba</TextServices>
            <ButtonServices
              selected={barba}
              onPress={() => {
                setBarba(barba ? false : true);
                setServices((prev) => {
                  return { ...prev, barba: barba ? false : true };
                });
              }}
            >
              <TextButtonServices>Selecionar</TextButtonServices>
            </ButtonServices>
          </Services>
          <ButtonHandle onPress={handleSubmit}>
            <TextButtonServices>Agendar</TextButtonServices>
          </ButtonHandle>
        </Content>

        <TabBottom>
          <Button  onPress={logout}>
            <Icon2 name="exit-to-app" size={40} color="#fff" />
          </Button>
          <ContentBotton>
            <ImageComponetBotton source={require("../../assets/agenda.png")} />
          </ContentBotton>
          <Button  onPress={() => navigation.navigate("MyList")}>
            <Icon name="list" size={30} color="#fff" />
          </Button>
        </TabBottom>
      </Container>
    </BackgroundLinear>
  );
};

export default Home;
