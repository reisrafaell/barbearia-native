import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageComponet = styled.Image`
width: 260px;
height: 270px;

`
export const TitleComponet = styled.Text`
  color: ${props=> props.color || '#fff'};
  padding: 20px 0;
  font-size: 30px;
  text-align: center;
`;

export const TextComponet = styled.Text`
  color:  ${props=> props.color || '#fff'};
  font-size: 20px;
  margin: 40px;
  text-align: center;
`;
