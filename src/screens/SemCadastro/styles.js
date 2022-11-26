import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Logo = styled.Image`
  margin-top: 0;
  width: 100%;
  height: 25%;
`;

export const Titulo = styled.Text`
  color: #000000;
  font-family: "Verdana";
  text-align: center;
  font-size: 18px;
  text-aling: center;
  margin-top: 180px;
`;

export const SubTitulo = styled.Text`
  color: #000000;
  font-family: Verdana;
  text-align: center;
  font-weight: 800;
  font-size: 18px;
`;

export const Botao = styled.TouchableOpacity`
  align-items: center;
  width: 90%;
  height: 50px;
  background-color: #ffca21;
  border-radius: 30px;
  margin-left: 18px;
  margin-top: 25px;
  padding: 18px;
`;

export const TextoBotao = styled.Text`
  font-family: Verdana;
  text-align: center;
  color: #000000;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  margin-top: 170px;
`;
