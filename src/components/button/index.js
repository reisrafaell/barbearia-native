import {
  Button,
  Text,
  
} from "./styles";

const ButtonComponent = ({ onPress, text, w, m }) => {
  return (
    <Button w={w} m={m} onPress={onPress}>
      <Text>{text}</Text>
     
    </Button>
  );
};

export default ButtonComponent;
