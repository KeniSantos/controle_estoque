import styled from "styled-components";
import {Button} from "../../Components/Botao/styles";

export const Container = styled.main`
  display: flex;
  flex: auto;
  padding: 30px;
  flex-direction: column;
`

export const Titulo = styled.h2`
  font-size: 22px;
  line-height: 60px;
`

export const DivConteudo = styled.div`
  display: flex;
  gap: 34px;
  margin-bottom: 40px;
  align-items: flex-end;
`

export const Input = styled.input`
  border: 1px solid #B5B3B4;
  padding: 6px;
  width: 220px;
  outline: none;
  border-radius: 4px;
  font-size: 15px;
`

export const BotaoCustomizado = styled(Button)`
  width: 100px;
  height: 40px;
`

export const DivAdicionar = styled.div`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  justify-content: space-between;
  font-height: 20px;
  width: 380px;
  height: 80px;
`