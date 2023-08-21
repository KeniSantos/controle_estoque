import styled from 'styled-components';
import { Button } from "../../Components/Botao/styles";

export const ContainerPrincipal = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #00000090;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  width: 300px;
  height: 200px;
  background-color: #FFFFFF;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const BotaoCustomizado = styled(Button)<{color: string}>`
  background-color: ${({color}) => color};
  text-align: center;
  width: 100px;
  height: 40px;
`