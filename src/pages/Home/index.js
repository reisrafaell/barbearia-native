import React from "react";
import  {BackgroundLinear}  from "./gradient";
import {
  Container,
  TextComponet,
  ImageComponet,
  ButtonComponet,
  ButtonComponetTwo,
  Separator,
} from "./styles";

const Home = () => {
  // const handleClick = () => {
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: "Login" }],
  //   });
  // };
  return (
    <BackgroundLinear>
      <Container>
        <TextComponet>
          By creating an account or logging in, you agree to our Terms and
          Privacy Pollicy
        </TextComponet>
        <TextComponet>Create a new account</TextComponet>
        <ButtonComponet>
          <TextComponet>LOG IN WITH PHONE NUMBER</TextComponet>
        </ButtonComponet>
        <ButtonComponet>
          <TextComponet>LOG IN WITH FACEBOOK</TextComponet>
        </ButtonComponet>

       
      </Container>
    </BackgroundLinear>
  );
};

export default Home