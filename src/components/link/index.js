import { Button, Text, Container } from "./styles";

const LinkComponent = ({ onPress, link, textBefore }) => {
  return (
    <Container>
      {textBefore && <Text>{textBefore}</Text>}
      <Button onPress={onPress}>
        <Text link={true}>{link}</Text>
      </Button>
    </Container>
  );
};

export default LinkComponent;
