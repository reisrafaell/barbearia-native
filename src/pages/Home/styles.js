import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;

export const TextComponet = styled.Text`
  color: #fff;
  align-self: flex-start;
  font-size: 24px;
  margin: 20px;
`;
export const ImageComponet = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ImageComponetBotton = styled.Image`
  width: 50px;
  height: 50px;
  color: #fff;
`;
export const ContentBotton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  height: 80px;
  width: 80px;
  border: 3px solid #106d95;
  position: relative;
  bottom: 25px;
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
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 10px 35px 35px 35px;
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
export const Services = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const TextServices = styled.Text`
  color: #106d95;
font-weight: bold;
  font-size: 18px;
`;

export const ButtonServices = styled.TouchableOpacity`
  background-color: ${props=> props.selected ? "#106D95" : "#4dc6fa"};
  padding: 10px;
  border-radius: 10px;
`;
export const ButtonHandle = styled.TouchableOpacity`
  background-color: #106D95;
  padding: 10px;
  border-radius: 10px;
  margin: 20px ;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextButtonHandle = styled.Text`
  color: #fff;
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

export const Button = styled.TouchableOpacity``;
