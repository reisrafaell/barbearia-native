import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
export const DuoButtonContainer = styled.View`
  width: 100%;
  padding: 0 15px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
 
 
`;
export const ButtonComponet = styled.TouchableOpacity`
  width: 50%;
  height: 50px; 
  color: #fff;
  font-size: 16px;
  background-color: ${props=> props.active ? '#106D95': "#4DC6FA"}; 
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const ImageComponet = styled.Image`
  width: 60px;
  height: 70px;
  position: absolute;
  right: 20px;
`;
export const TitleComponet = styled.Text`
  color: ${(props) => props.color || "#fff"};
  padding: 20px 0;
  font-size: 30px;
  text-align: center;
`;

export const TextComponet = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: center;
`;

export const Slider = styled.FlatList`
width: 90%;
margin: 10px;
`;

export const Content = styled.View`
  height: 230px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: aliceblue;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 30px;
`;
export const ContentItem = styled.View`

`;
