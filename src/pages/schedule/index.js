import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackgroundLinear } from "./gradient";
import ButtonComponent from "../../components/button";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContex } from "../../contexts/auth";

import { collection, addDoc } from "firebase/firestore";

import {
  Container,
  ImageComponet,
  TextComponet,
  TitleComponet,
  TextButtonServices,
  ButtonHandle,
  Content,
  Text,
  Input,
  Button,
  ContentMain,
  ContentHeader,
  TextHeader,
  ContentMainServices,
  TextServices,
  ButtonServices,
  DateTimePickerModal,
} from "./styles";
import { database } from "../../config/firebase";

const Schedule = () => {
  const navigation = useNavigation();
  const { services, name } = useContext(AuthContex);
  const [time, setTime] = useState("");
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [nameCliente, setName] = useState();

  const [tuesday, setTuesday] = useState([
    { one: true, two: true, three: true, four: true, five: true, six: true }
  ]);
  // const [tuesday, setTuesday] = useState([
  //   {tuesday  : {hora: {one: true, two: true, three: true, four: true, five: true, six: true}}},
  //   {thursday   : {hora: {one: true, two: true, three: true, four: true, five: true, six: true}}},
  //   {friday   : {hora: {one: true, two: true, three: true, four: true, five: true, six: true}}}
  // ]);
console.log(tuesday)

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    // console.log(date.toString());
    setDate(date.toString().slice(4, -15));
    hideDatePicker();
  };

  
  const userCollection = collection(database, "Tasks");

  const handleSubmit = async () => {
    if (date && nameCliente && services) {
      const newUser = await addDoc(userCollection, {
        idClientedb: name,
        namedb: nameCliente,
        activedb: true,
        datedb: date,
        cortedb: services.corte,
        barbadb: services.barba,
        sombrancelhadb: services.sombrancelha,
        limpezadb: services.limpeza,
      });
      alert("Agenda Cadastrada!");
      navigation.navigate("Home");
    } else {
      alert("Preencha todos os campos!");
    }
  };
  return (
    <BackgroundLinear>
      <DateTimePickerModal display={isDatePickerVisible}>
        <Button onPress={() => setDatePickerVisibility(!true)}>
          <Icon name="close" size={30} color="#106d95" />
          <TextComponet m={"10px"} mb={"0"} color="#106d95">
            Fechar{" "}
          </TextComponet>
        </Button>
        <TextHeader>Selecionar Horário</TextHeader>

        <ButtonServices
          onPress={() => {
            setDatePickerVisibility(!true)
            setTuesday((prev) => {
              return { ...prev, one: !true };
            });
          }}
        >
          <TextButtonServices>08:00</TextButtonServices>
          <TextButtonServices>Selecionar</TextButtonServices>
        </ButtonServices>
        <ButtonServices
          onPress={() => {
            setDatePickerVisibility(!true)
            setTuesday((prev) => {
              return { ...prev, two: !true  };
            });
          }}
        >
          <TextButtonServices>10:00</TextButtonServices>
          <TextButtonServices>Selecionar</TextButtonServices>
        </ButtonServices>
        <ButtonServices
          onPress={() => {
            setDatePickerVisibility(!true)
            setTuesday((prev) => {
              return { ...prev, three:!true  };
            });
          }}
        >
          <TextButtonServices>12:00</TextButtonServices>
          <TextButtonServices>Selecionar</TextButtonServices>
        </ButtonServices>
        <ButtonServices
          onPress={() => {
            setDatePickerVisibility(!true)
            setTuesday((prev) => {
              return { ...prev, four: !true  };
            });
          }}
        >
          <TextButtonServices>14:00</TextButtonServices>
          <TextButtonServices>Selecionar</TextButtonServices>
        </ButtonServices>
        <ButtonServices
          onPress={() => {
            setDatePickerVisibility(!true)
            setTuesday((prev) => {
              return { ...prev, five: !true  };
            });
          }}
        >
          <TextButtonServices>16:00</TextButtonServices>
          <TextButtonServices>Selecionar</TextButtonServices>
        </ButtonServices>
        <ButtonServices
          onPress={() => {
            setDatePickerVisibility(!true)
            setTuesday((prev) => {
              return { ...prev, six:!true  };
            });
          }}
        >
          <TextButtonServices>17:00</TextButtonServices>
          <TextButtonServices>Selecionar</TextButtonServices>
        </ButtonServices>
      </DateTimePickerModal>

      <Container>
        <TitleComponet>Agendamento</TitleComponet>

        <Button onPress={() => navigation.navigate("Home")}>
          <Icon name="arrow-left" size={30} color="#fff" />
          <TextComponet color="#fff">Voltar </TextComponet>
        </Button>
        <ImageComponet source={require("../../assets/logo.png")} />
        <Content>
          <ButtonHandle onPress={() => setDatePickerVisibility(!false)}>
            <TextButtonServices>Selecionar Data e Hora</TextButtonServices>
          </ButtonHandle>

          <ContentMainServices>
            <ContentHeader>
              <TextHeader>Serviços selecionados</TextHeader>
              <Icon name="arrow-down" size={20} color="#fff" />
            </ContentHeader>
            {services.corte && <TextServices>Corte Masculino</TextServices>}
            {services.limpeza && <TextServices>Limpeza de Rosto</TextServices>}
            {services.sombrancelha && (
              <TextServices>Sombrancelha </TextServices>
            )}
            {services.barba && <TextServices>Barba </TextServices>}
          </ContentMainServices>
          <ContentMain>
            <Text>Nome do cliente</Text>
            <Input
              placeholder="none"
              onChangeText={(value) => setName(value)}
            ></Input>
          </ContentMain>
          <ButtonHandle onPress={handleSubmit}>
            <TextButtonServices>Finalizar Agendamento</TextButtonServices>
          </ButtonHandle>
        </Content>
      </Container>
    </BackgroundLinear>
  );
};

export default Schedule;
