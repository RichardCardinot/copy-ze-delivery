import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Logo = styled.Image`
    margin-top: 0;
    width: 100%;
    height: 25%;
`;

export const Titulo = styled.Text`
    color:  #000000; 
    font-family: Verdana;
    text-align: center;
    font-weight: 800;
    font-size: 18px;
    margin-top: 40px;
`;

export const SubTitulo = styled.Text`
    color:  #000000; 
    font-family: "Verdana";
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
`;

export const InputEmail = styled.TextInput`
    width: 90%;
    height: 60px;
    font-size: 16px;
    font-family: "Verdana";
    border: 2.5px solid #F5F5F5;
    border-radius: 10px;
    padding: 15px;
    margin-left: 18px;
    margin-top: 22px;
`;

export const ContainerCheckBox = styled.View`
    flex-direction: row;
    margin-top: 10px;
    margin-left: 18px;
`;

export const Email = styled.Text`
    color: #696969; 
    font-family: Verdana;
    text-align: center;
    font-size: 12px;
    margin-left: 10px;
`;

export const Botao = styled.TouchableOpacity`
    align-items: center;
    width: 90%;
    height: 50px;
    background-color: #DCDCDC;
    border-radius: 30px;
    margin-left: 18px;
    margin-vertical: 25px;
    padding: 18px;
`;

export const TextoBotao = styled.Text`
    font-family: Verdana;
    text-align: center;
    color: #696969;
    font-size: 12px;
    font-weight: bold;
`;

export const ContainerLinha = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Linha = styled.View`
    flex: 1;
    height: 2;
    background-color: #000000;
    margin-horizontal: 16px;
`;

export const TextoRedes = styled.Text`
    font-family: Verdana;
    text-align: center;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
`;

export const Icone = styled.Image`
    width: 7.5%;
    height: 210%;
    margin-left: 5px;
    margin-right: 50px;

`;

export const ContSemCadastro = styled.Text`
    color:  #FF8C00; 
    font-family: Verdana;
    text-align: center;
    font-weight: 800;
    font-size: 12px;
    margin-top: 20px;
`;

