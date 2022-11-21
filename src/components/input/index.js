import { useState } from "react";
import { Container, Icon, Label, Input, Button } from "./styles";

const InputComponent = ({type, placeholder, onChangeText, value, label, showError }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <Input
      showError={showError}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={type === "text" || show == true ? false : true}
        placeholder={placeholder}
      ></Input>
      {type === "text" ? (
        <Icon source={require("../../assets/email.png")} />
      ) : (
        <Button onPress={() => (show ? setShow(false) : setShow(true))}>
          <Icon source={require("../../assets/password.png")} />
        </Button>
      )}
    </Container>
  );
};

export default InputComponent;
