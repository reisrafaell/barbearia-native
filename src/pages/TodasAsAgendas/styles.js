import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;

export const TextComponet = styled.Text`
  color: ${(props) => props.color || "#ff"};
  align-self: flex-start;
  font-size: 24px;
  margin: 20px;
`;

export const ButtonComponet = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  margin-top: 10px;
  border: 1px solid #fff;
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextInputComponet = styled.TextInput`
  width: 300px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 50px;
  text-align: center;
  color: #fff;
`;

export const ButtonComponetTwo = styled.Button`
  background-color: #000;
  color: #841584;
  margin: 30px;
  width: 300px;
`;
export const Content = styled.View`
  width: 100%;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 10px 30px 20px 30px;
`;
export const ContentHeader = styled.View`
  padding: 0 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #cbefff;
`;
export const ContainerButtons = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #cbefff;
`;
export const ContentMainServices = styled.View`
  height: 160px;
  background-color: #fff;
`;
export const DateTimePickerModal = styled.View`
  width: 100%;
  display: ${(props) => (props.display ? "flex" : "none")};
  height: 600px;
  padding:  20px;  
  background-color: #cbefff;
`;
export const ContentMain = styled.View``;
export const ContainerHours = styled.View`
  width: 100%;
`;
export const TabBottom = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  height: 60px;

  background-color: #106d95;
`;

export const ButtonHandle = styled.TouchableOpacity`
  background-color: #106d95;
  background-color: ${(props) => (props.selected ? "#4dc6fa" : "#106D95")};
  padding: 10px;
  border-radius: 10px;
  margin: 15px 0 20px;
  min-width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  color: #000;
  padding: 10px;
  width: 100%;
  height: 50px;
  background-color: #cbefff;
  font-size: 18px;
  border-radius: 10px;
`;
export const TextServices = styled.Text`
  color: #5f5b5b;
  font-weight: bold;
  font-size: 14px;
  margin: 5px 15px;
`;
export const TextHeader = styled.Text`
  color: #106d95;
  font-weight: bold;
  font-size: 18px;
  padding: 2px 0;
`;
export const Text = styled.Text`
  color: #106d95;
  margin: 8px 15px;
  font-weight: bold;
  font-size: 18px;
`;
export const TextButtonServices = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
export const TitleComponet = styled.Text`
  color: ${(props) => props.color || "#fff"};
  padding: 20px 0;
  font-size: 30px;
  text-align: center;
  align-self: flex-start;
  margin: 30px 0 0 30px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const ImageComponet = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

export const ButtonServices = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${(props) => (props.selected ? "#106D95" : "#4dc6fa")};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
`;
export const ButtonServicesSecondary = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:#FF1515;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
`;
