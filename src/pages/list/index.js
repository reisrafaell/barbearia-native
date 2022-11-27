import { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { BackgroundLinear } from "../Home/gradient";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/button/index";
import { AuthContex } from "../../contexts/auth";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import {
  Container,
  ImageComponet,
  TextComponet,
  TitleComponet,
  Slider,
  Content,
  DuoButtonContainer,
  ButtonComponet,
  ButtonComponetClose,
} from "./styles";
import { database } from "../../config/firebase";



const List = () => {
  const { name, logout } = useContext(AuthContex);

  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);
  const [activeLeft, setActiveLeft] = useState(true);
  const [update, setUpdate] = useState(false);
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

  const UpdateTask = async (id) => {
    setUpdate(!false)
    const docRef = doc(database, "Tasks", id);
    await updateDoc(docRef, {     
      activedb: false,
    });
  };

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollection);
      //  console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, [update]);


  const renderItemOpen = ({ item }) =>
    item.activedb && (
      <Content {...item}>
        <ImageComponet source={require("../../assets/icon.png")} />
        <TextComponet>Semana Referência: {item.atualDate}</TextComponet>
        <TextComponet>Dia da semana: {item.datedb}</TextComponet>
        <TextComponet>Hora: {item.hourDb}</TextComponet>
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
        <ButtonComponetClose onPress={()=> UpdateTask(item.id)}>
          <TextComponet>Fechar</TextComponet>
        </ButtonComponetClose>
      </Content>
    );

  const renderItemClose = ({ item }) =>
    !item.activedb && (
      <Content {...item}>
        <ImageComponet source={require("../../assets/icon.png")} />
        <TextComponet>Semana Referência: {item.atualDate}</TextComponet>
        <TextComponet>Dia da semana: {item.datedb}</TextComponet>
        <TextComponet>Hora: {item.hourDb}</TextComponet>
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
        <ButtonComponetClose active onPress={()=> UpdateTask(item.id)}>
          <TextComponet>Concluído</TextComponet>
        </ButtonComponetClose>
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
          >
            <TextComponet>Abertos</TextComponet>
          </ButtonComponet>
          <ButtonComponet
            active={activeRight}
            onPress={() => handleActive("right")}
          >
            <TextComponet>Fechados</TextComponet>
          </ButtonComponet>
        </DuoButtonContainer>
        {activeLeft ? (
          <>
            <Slider
              data={tasks}
              renderItem={renderItemOpen}
              keyExtractor={(item) => item.id}
            />
          </>
        ) : (
          <>
            <Slider
              data={tasks}
              renderItem={renderItemClose}
              keyExtractor={(item) => item.id}
            />
          </>
        )}

        <ButtonComponent
          onPress={() => navigation.navigate("ScheduleAll")}
          text="Quadro de Horários"
        ></ButtonComponent>
        <ButtonComponent
        m='15px'
          onPress={logout}
          text="Sair"
        ></ButtonComponent>
      </Container>
    </BackgroundLinear>
  );
};

export default List;
