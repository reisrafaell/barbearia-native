import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackgroundLinear } from "./gradient";
import ButtonComponent from "../../components/button";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContex } from "../../contexts/auth";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

import * as S from "./styles";
import { database } from "../../config/firebase";

const ScheduleAll = () => {
  const navigation = useNavigation();
  const userCollection = collection(database, "Tasks");
  const userCollectionAgenta = collection(database, "Agenda");

  const [tasks, setTasks] = useState([]);

  const [agenda, setAgenda] = useState([]);
  const { services, name } = useContext(AuthContex);

  const [mes, setMes] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState("segunda");
  const [hourSelected, setHourSelected] = useState("");
  const [atualDate, setAtualDate] = useState("");
  const [idDoc, setIdDoc] = useState("");

  const [nameCliente, setName] = useState();

  const UpdateTask = async () => {
    const docRef = doc(database, "Agenda", idDoc);
    await updateDoc(docRef, {
      dia: dateSelected,
      hora: hourSelected,
      id: idDoc,
      selecionado: true,
    });
  };

  useEffect(() => {
    const newDate = new Date().getDate();
    const mes = new Date().getMonth();
    setMes(mes + 1);
    setAtualDate(newDate);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollection);
      //  console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getAgenda = async () => {
      const data = await getDocs(userCollectionAgenta);
      //  console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setAgenda(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAgenda();
    getUser();
  }, []);

  const handleSubmit = async () => {
    if (dateSelected && nameCliente && services && hourSelected) {
      UpdateTask();
      const newUser = await addDoc(userCollection, {
        idClientedb: name,
        namedb: nameCliente,
        activedb: true,
        datedb: dateSelected,
        hourDb: hourSelected,
        atualDate: atualDate / mes,
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
     

      <S.Container>
        <S.TitleComponet>Quadro de Horários</S.TitleComponet>

        <S.Button onPress={() => navigation.navigate("List")}>
          <Icon name="arrow-left" size={30} color="#fff" />
          <S.TextComponet color="#fff">Voltar </S.TextComponet>
        </S.Button>
     
        <S.DateTimePickerModal display>
    
        <S.TextHeader>
          Semana Referência: {atualDate}/{mes}{" "}
        </S.TextHeader>
      

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
            {agenda.map(
              (value, id) =>
                value.dia === "segunda" &&
                (value.selecionado ? (
                  <S.ButtonServicesSecondary key={id}>
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Reservado</S.TextButtonServices>
                  </S.ButtonServicesSecondary>
                ) : (
                  <S.ButtonServices
                    key={id}
                    onPress={() => {
                    
                      setIdDoc(value.id);
                    }}
                    selected={hourSelected === value.hora ? true : false}
                  >
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Disponível</S.TextButtonServices>
                  </S.ButtonServices>
                ))
            )}
          </S.ContainerHours>
        ) : dateSelected == "quarta" ? (
          <S.ContainerHours>
            {agenda.map(
              (value, id) =>
                value.dia === "quarta" &&
                (value.selecionado ? (
                  <S.ButtonServicesSecondary key={id}>
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Reservado</S.TextButtonServices>
                  </S.ButtonServicesSecondary>
                ) : (
                  <S.ButtonServices
                    key={id}
                    onPress={() => {
                    
                      setIdDoc(value.id);
                    }}
                    selected={hourSelected === value.hora ? true : false}
                  >
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Disponível</S.TextButtonServices>
                  </S.ButtonServices>
                ))
            )}
          </S.ContainerHours>
        ) : (
          <S.ContainerHours>
            {agenda.map(
              (value, id) =>
                value.dia === "sexta" &&
                (value.selecionado ? (
                  <S.ButtonServicesSecondary key={id}>
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Reservado</S.TextButtonServices>
                  </S.ButtonServicesSecondary>
                ) : (
                  <S.ButtonServices
                    key={id}
                    onPress={() => {
                    
                      setIdDoc(value.id);
                    }}
                    selected={hourSelected === value.hora ? true : false}
                  >
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Disponível</S.TextButtonServices>
                  </S.ButtonServices>
                ))
            )}
          </S.ContainerHours>
        )}
     
      </S.DateTimePickerModal>
        
      </S.Container>
    </BackgroundLinear>
  );
};

export default ScheduleAll;