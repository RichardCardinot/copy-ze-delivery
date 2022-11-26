import {
  Container,
  Logo,
  Titulo,
  SubTitulo,
  TextoBotao,
  Botao,
  ButtonContainer,
} from "./styles";
import logo from "../../../assets/ZeLogo.png";

export const SemCadastro = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Titulo>Antes de continuar...</Titulo>
      <SubTitulo>Você tem 18 anos ou mais?</SubTitulo>

      <ButtonContainer>
        <Botao>
          <TextoBotao>SIM</TextoBotao>
        </Botao>

        <Botao>
          <TextoBotao>NÃO</TextoBotao>
        </Botao>
      </ButtonContainer>
    </Container>
  );
};
