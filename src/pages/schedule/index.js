import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackgroundLinear } from "./gradient";
import ButtonComponent from "../../components/button";
import Icon from "react-native-vector-icons/FontAwesome";
import firestore from '@react-native-firebase/firestore'
import { AuthContex } from "../../contexts/auth";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  onSnapshot
} from "firebase/firestore";

import * as S from "./styles";
import { database } from "../../config/firebase";
import { async } from "@firebase/util";

const Schedule = () => {
  const navigation = useNavigation();
  const userCollection = collection(database, "Tasks");
  const userCollectionAgenta = collection(database, "Agenda");
  const [tasks, setTasks] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const { services, name } = useContext(AuthContex);
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);
  const [dateSelected, setDateSelected] = useState("");
  const [hourSelected, setHourSelected] = useState("");
  const [atualDate, setAtualDate] = useState("");
  const [idDoc, setIdDoc] = useState("");
  let segunda = [];
  let quarta = [];
  let sexta = [];

  const [nameCliente, setName] = useState();

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    // console.log(date.toString());
    setDate(date.toString().slice(4, -15));
    hideDatePicker();
  };

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
    setDate({ dia: dateSelected, hora: hourSelected });
  }, [dateSelected, hourSelected]);

  useEffect(() => {
    const newDate = new Date().getDate();
    setAtualDate(newDate);
    const DataOn = onSnapshot(doc(database, "cities", "SF"),(doc)=>{
      console.log('atual', doc.data())
    })
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


  useEffect(() => {
    const Data = firestore()
  }, [])
  


  const handleSubmit = async () => {
    if (date && nameCliente && services) {
      const newUser = await addDoc(userCollection, {
        idClientedb: name,
        namedb: nameCliente,
        activedb: true,
        datedb: dateSelected,
        hourDb: [
          { hora: "08:00", selecionado: false },
          { hora: "10:00", selecionado: false },
          { hora: "13:00", selecionado: false },
          { hora: "15:00", selecionado: false },
          { hora: "17:00", selecionado: false },
        ],
        atualDate: atualDate,
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

  agenda.map((v) => {
    console.log("v", v);
  });

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
            {agenda.map(
              (value, id) =>
                value.dia === "segunda" &&
                (value.selecionado ? (
                  <S.ButtonServicesSecondary>
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Indisponível</S.TextButtonServices>
                  </S.ButtonServicesSecondary>
                ) : (
                  <S.ButtonServices
                    onPress={() => {
                      setHourSelected(value.hora);
                      setIdDoc(value.id);
                    }}
                    selected={hourSelected === value.hora ? true : false}
                  >
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Selecionar</S.TextButtonServices>
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
                  <S.ButtonServicesSecondary>
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Indisponível</S.TextButtonServices>
                  </S.ButtonServicesSecondary>
                ) : (
                  <S.ButtonServices
                    onPress={() => {
                      setHourSelected(value.hora);
                      setIdDoc(value.id);
                    }}
                    selected={hourSelected === value.hora ? true : false}
                  >
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Selecionar</S.TextButtonServices>
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
                  <S.ButtonServicesSecondary>
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Indisponível</S.TextButtonServices>
                  </S.ButtonServicesSecondary>
                ) : (
                  <S.ButtonServices
                    onPress={() => {
                      setHourSelected(value.hora);
                      setIdDoc(value.id);
                    }}
                    selected={hourSelected === value.hora ? true : false}
                  >
                    <S.TextButtonServices>{value.hora}</S.TextButtonServices>
                    <S.TextButtonServices>Selecionar</S.TextButtonServices>
                  </S.ButtonServices>
                ))
            )}
          </S.ContainerHours>
        )}

        <S.ButtonHandle
          onPress={() => {
            console.log(date);
            setDatePickerVisibility(!true);
          }}
        >
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
            <S.Text>
              Data agendado: {`${dateSelected} - ${hourSelected} `}
            </S.Text>
          </S.ContentMain>
          <S.ButtonHandle onPress={UpdateTask}>
            <S.TextButtonServices>Finalizar Agendamento</S.TextButtonServices>
          </S.ButtonHandle>
        </S.Content>
      </S.Container>
    </BackgroundLinear>
  );
};

export default Schedule;
