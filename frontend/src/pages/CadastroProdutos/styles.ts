import styled from "styled-components";
import {Button} from "../../Components/Botao/styles";

export const Container = styled.main`
  display: flex;
  height: 100%;
  padding: 30px;
  flex-direction: column;
`

export const Titulo = styled.h2`
  font-size: 22px;
  line-height: 60px;
`

export const DivTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormCadastro = styled.form`
  display: flex;
  gap: 34px;
  margin-bottom: 40px;
  align-items: flex-end;
`

export const BotaoCustomizado = styled(Button)`
  width: 100px;
  height: 40px;
`