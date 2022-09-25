import {
  Button,
  Text,
  
} from "./styles";

const ButtonComponent = ({ onPress, text }) => {
  return (
    <Button onPress={onPress}>
      <Text>{text}</Text>
     
    </Button>
  );
};

export default ButtonComponent;
