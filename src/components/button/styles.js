import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: ${(props) => props.w || "80%"};
  margin-top: ${(props) => props.m || "0"};
  border-radius: 20px;
  height: 50px;
  background: #106d95;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 25px;
`;
