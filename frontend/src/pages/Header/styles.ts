import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`

export const Cabecalho = styled.header`
  height: 87px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0  40px;
`

export const TextoLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  &:hover{
    color: #0022FF;
  }
`

export const Lista = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
`