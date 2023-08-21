import styled from "styled-components"
import { Button } from "../../Components/Botao/styles"

export const ContainerPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000090;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: #FFFFFF;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Label = styled.label`
  font-size: 18px;
`

export const Input = styled.input`
  border: 1px solid #B5B3B4;
  padding: 6px;
  width: 380px;
  outline: none;
  border-radius: 4px;
  font-size: 15px;
`

export const Form = styled.form`
  width: 400px;
  height: 360px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const BotaoCustomizado = styled(Button)<{color: string}>`
  background-color: ${({color}) => color};
  width: 100px;
  height: 40px;
`

export const Div = styled.div`
  display: flex;
  gap: 10px;
`