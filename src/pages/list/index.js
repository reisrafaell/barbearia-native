import { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { BackgroundLinear } from "../Home/gradient";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/button/index";
import { AuthContex } from "../../contexts/auth";
import { collection, getDocs } from "firebase/firestore";

import {
  Container,
  ImageComponet,
  TextComponet,
  TitleComponet,
  Slider,
  Content,
  DuoButtonContainer,
  ButtonComponet,
} from "./styles";
import { database } from "../../config/firebase";

const List = () => {
  const { name } = useContext(AuthContex);

  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);
  const [activeLeft, setActiveLeft] = useState(true);
  const [activeRight, setActiveRight] = useState();

  const userCollection = collection(database, "Tasks");

  const handleActive = (position) => {
    if (position === "left") {
      setActiveLeft(true);
      setActiveRight(false);
    } else {
      setActiveLeft(false);
      setActiveRight(true);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollection);
      //  console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);

  const renderItem = ({ item }) =>
    item.idClientedb === name && (
      <Content {...item}>
        <ImageComponet source={require("../../assets/icon.png")} />
        {item.namedb && <TextComponet>Cliente: {item.namedb}</TextComponet>}
        {item.activedb ? (
          <TextComponet>Status: Aberto</TextComponet>
        ) : (
          <TextComponet>Status: Fechado</TextComponet>
        )}
        <TextComponet>Serviços:</TextComponet>
        {item.barbadb && <TextComponet>Barba</TextComponet>}
        {item.limpezadb && <TextComponet>Limpeza</TextComponet>}
        {item.sombrancelhadb && <TextComponet>Sombrancela</TextComponet>}
        {item.cortedb && <TextComponet>Corte</TextComponet>}
        <TextComponet>Data: {item.datedb}</TextComponet>
      </Content>
    );

  return (
    <BackgroundLinear>
      <Container>
        <TitleComponet>Agendas</TitleComponet>
        <DuoButtonContainer>
          <ButtonComponet
            active={activeLeft}
            onPress={() => handleActive("left")}
          ><TextComponet>Abertos</TextComponet>
          </ButtonComponet>
          <ButtonComponet
            active={activeRight}
            onPress={() => handleActive("right")}
          >
            <TextComponet>Fechado</TextComponet>
          </ButtonComponet>
        </DuoButtonContainer>
        {activeLeft ? (
          <>
            <Slider
              data={tasks}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </>
        ) : (
          <>
            <Slider
              data={tasks}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </>
        )}

        <ButtonComponent
          onPress={() => navigation.navigate("Home")}
          text="Voltar"
        ></ButtonComponent>
      </Container>
    </BackgroundLinear>
  );
};

export default List;
