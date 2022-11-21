import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageComponet = styled.Image`
width: 250px;
height: 260px;

`
export const TitleComponet = styled.Text`
  color: ${props=> props.color || '#fff'};
  padding: 5px 0;
  font-size: 30px;
  text-align: center;
`;

export const TextComponet = styled.Text`
  color:  ${props=> props.color || '#fff'};
  font-size: 20px;
  text-align: center;
  margin-left: ${props=> props.m || "0"};
  margin-bottom: ${props=> props.mb || "5px"};
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding: 0 20px;
`;