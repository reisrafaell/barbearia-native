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
  ButtonComponetClose,
  ButtonComponet,
} from "./styles";
import { database } from "../../config/firebase";

const MyList = () => {
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
        <TextComponet>Semana Referência: {item.atualDate}</TextComponet>
           
        <TextComponet>Serviços:</TextComponet>
        {item.barbadb && <TextComponet>Barba</TextComponet>}
        {item.limpezadb && <TextComponet>Limpeza</TextComponet>}
        {item.sombrancelhadb && <TextComponet>Sombrancela</TextComponet>}
        {item.cortedb && <TextComponet>Corte</TextComponet>}
        <TextComponet>Dia da semana: {item.datedb}</TextComponet>
        <TextComponet>Hora: {item.hourDb}</TextComponet>
      </Content>
    );

  return (
    <BackgroundLinear>
      <Container>
        <TitleComponet>Histórico de Agendas</TitleComponet>
        <Slider
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <ButtonComponent
          onPress={() => navigation.navigate("Home")}
          text="Voltar"
        ></ButtonComponent>
      </Container>
    </BackgroundLinear>
  );
};

export default MyList;
