import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackgroundLinear } from "./gradient";
import ButtonComponent from "../../components/button";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContex } from "../../contexts/auth";
import { collection, addDoc } from "firebase/firestore";

import * as S from "./styles";
import { database } from "../../config/firebase";

const Schedule = () => {
  const navigation = useNavigation();
  const { services, name } = useContext(AuthContex);
  const [time, setTime] = useState("");
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);
  const [dateSelected, setDateSelected] = useState("");
  const [hourSelected, setHourSelected] = useState("");

  const [nameCliente, setName] = useState();

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    // console.log(date.toString());
    setDate(date.toString().slice(4, -15));
    hideDatePicker();
  };

  useEffect(() => {
 setDate({dia: dateSelected, hora: hourSelected})
  }, [dateSelected,hourSelected])
  

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
      <S.DateTimePickerModal display={isDatePickerVisible}>
        <S.Button onPress={() => setDatePickerVisibility(!true)}>
          <Icon name="close" size={30} color="#106d95" />
          <S.TextComponet m={"10px"} mb={"0"} color="#106d95">
            Fechar{" "}
          </S.TextComponet>
        </S.Button>
        <S.TextHeader>Selecionar Horário disponível</S.TextHeader>

        <S.ContainerButtons>
          <S.ButtonHandle
            onPress={() => setDateSelected("segunda")}
            selected={dateSelected == "segunda" ? true : false}
          >
            <S.TextButtonServices>Segunda</S.TextButtonServices>
          </S.ButtonHandle>
          <S.ButtonHandle
            onPress={() => setDateSelected("quarta")}
            selected={dateSelected == "quarta" ? true : false}
          >
            <S.TextButtonServices>Quarta</S.TextButtonServices>
          </S.ButtonHandle>
          <S.ButtonHandle
            onPress={() => setDateSelected("sexta")}
            selected={dateSelected == "sexta" ? true : false}
          >
            <S.TextButtonServices>Sexta</S.TextButtonServices>
          </S.ButtonHandle>
        </S.ContainerButtons>

        {dateSelected === "segunda" ? (
          <S.ContainerHours>
            <S.ButtonServices
              onPress={() => {
                setHourSelected("08:00");
               
              }}
              selected={hourSelected === "08:00" ? true : false}
            >
              <S.TextButtonServices>08:00</S.TextButtonServices>
              <S.TextButtonServices>Selecionar</S.TextButtonServices>
            </S.ButtonServices>

            <S.ButtonServices
              onPress={() => {
                setHourSelected("10:00");
                
              }}
              selected={hourSelected === "10:00" ? true : false}
            >
              <S.TextButtonServices>10:00</S.TextButtonServices>
              <S.TextButtonServices>Selecionar</S.TextButtonServices>
            </S.ButtonServices>
            <S.ButtonServices
              onPress={() => {
                setHourSelected("12:00");
               
              }}
              selected={hourSelected === "12:00" ? true : false}
            >
              <S.TextButtonServices>12:00</S.TextButtonServices>
              <S.TextButtonServices>Selecionar</S.TextButtonServices>
            </S.ButtonServices>
            <S.ButtonServices
              onPress={() => {
                setHourSelected("14:00");
              
              }}
              selected={hourSelected === "14:00" ? true : false}
            >
              <S.TextButtonServices>14:00</S.TextButtonServices>
              <S.TextButtonServices>Selecionar</S.TextButtonServices>
            </S.ButtonServices>
            <S.ButtonServices
              onPress={() => {
                setHourSelected("16:00");
               
              }}
              selected={hourSelected === "16:00" ? true : false}
            >
              <S.TextButtonServices>16:00</S.TextButtonServices>
              <S.TextButtonServices>Selecionar</S.TextButtonServices>
            </S.ButtonServices>
            <S.ButtonServices
              onPress={() => {
                setHourSelected("17:00");
                
              }}
              selected={hourSelected === "17:00" ? true : false}
            >
              <S.TextButtonServices>17:00</S.TextButtonServices>
              <S.TextButtonServices>Selecionar</S.TextButtonServices>
            </S.ButtonServices>
          </S.ContainerHours>
        ) : dateSelected == "quarta" ? (
          <S.ContainerHours>
            <S.TextButtonServices>quarta</S.TextButtonServices>
          </S.ContainerHours>
        ) : (
          <S.ContainerHours>
            <S.TextButtonServices>sexta</S.TextButtonServices>
          </S.ContainerHours>
        )}

        <S.ButtonHandle onPress={() =>{
          console.log(date)
          setDatePickerVisibility(!true)}}>
          <S.TextButtonServices>Confirmar</S.TextButtonServices>
        </S.ButtonHandle>
      </S.DateTimePickerModal>

      <S.Container>
        <S.TitleComponet>Agendamento</S.TitleComponet>

        <S.Button onPress={() => navigation.navigate("Home")}>
          <Icon name="arrow-left" size={30} color="#fff" />
          <S.TextComponet color="#fff">Voltar </S.TextComponet>
        </S.Button>
        <S.ImageComponet source={require("../../assets/logo.png")} />
        <S.Content>
          <S.ButtonHandle onPress={() => setDatePickerVisibility(!false)}>
            <S.TextButtonServices>Selecionar Data e Hora</S.TextButtonServices>
          </S.ButtonHandle>

          <S.ContentMainServices>
            <S.ContentHeader>
              <S.TextHeader>Serviços selecionados</S.TextHeader>
              <Icon name="arrow-down" size={20} color="#fff" />
            </S.ContentHeader>
            {services.corte && <S.TextServices>Corte Masculino</S.TextServices>}
            {services.limpeza && (
              <S.TextServices>Limpeza de Rosto</S.TextServices>
            )}
            {services.sombrancelha && (
              <S.TextServices>Sombrancelha </S.TextServices>
            )}
            {services.barba && <S.TextServices>Barba </S.TextServices>}
          </S.ContentMainServices>
          <S.ContentMain>
            <S.Text>Nome do cliente</S.Text>
            <S.Input
              placeholder="none"
              onChangeText={(value) => setName(value)}
            ></S.Input>
             <S.Text>Data agendado: {`${dateSelected} - ${hourSelected} `}</S.Text>
          </S.ContentMain>
          <S.ButtonHandle onPress={handleSubmit}>
            <S.TextButtonServices>Finalizar Agendamento</S.TextButtonServices>
          </S.ButtonHandle>
        </S.Content>
      </S.Container>
    </BackgroundLinear>
  );
};

export default Schedule;
