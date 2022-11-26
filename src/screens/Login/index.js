import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Logo,
  Titulo,
  SubTitulo,
  InputEmail,
  ContainerCheckBox,
  Email,
  TextoBotao,
  Botao,
  Linha,
  ContainerLinha,
  TextoRedes,
  Icone,
  ContSemCadastro,
} from "./styles";
import logo from "../../../assets/ZeLogo.png";
import logoFacebook from "../../../assets/Facebook.png";
import logoAplle from "../../../assets/Aplle.png";
import { useState } from "react";
import { CheckBox } from "react-native";

export const Login = () => {
  const [selecao, setSelecao] = useState(false);

  const navigation = useNavigation();

  const screenSemCadastro = () => {
    navigation.navigate("SemCadastro");
  };

  return (
    <Container>
      <Logo source={logo} />
      <Titulo>Que bom que você está aqui!</Titulo>
      <SubTitulo>Como deseja continuar?</SubTitulo>

      <InputEmail placeholder={"E-mail"} placeholderTextColor={"gray"} />

      <ContainerCheckBox>
        <CheckBox value={selecao} onValueChange={setSelecao} />
        <Email>Salvar e-mail</Email>
      </ContainerCheckBox>

      <Botao>
        <TextoBotao>CONTINUAR COM E-MAIL</TextoBotao>
      </Botao>

      <ContainerLinha>
        <Linha />
        <Titulo style={{ fontSize: 14, marginTop: 0 }}>OU</Titulo>
        <Linha />
      </ContainerLinha>

      <Botao style={{ backgroundColor: "#3b5998", flexDirection: "row" }}>
        <Icone source={logoFacebook} />
        <TextoRedes style={{ color: "#FFFFFF" }}>
          CONTINUAR COM FACEBOOK
        </TextoRedes>
      </Botao>

      <Botao
        style={{
          marginTop: 0,
          backgroundColor: "#454443",
          flexDirection: "row",
        }}
      >
        <Icone source={logoAplle} />
        <TextoRedes>CONTINUAR COM A APPLE</TextoRedes>
      </Botao>

      <ContSemCadastro onPress={screenSemCadastro}>
        Continuar sem cadastro
      </ContSemCadastro>
    </Container>
  );
};
