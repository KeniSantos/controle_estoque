import styled from "styled-components";

export const LinhaConteudo = styled.tr`
  background-color: #ffffff;
  height: 40px;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr 3fr 2fr;
`

export const ColunaTabela = styled.td`
  padding-left: 6px;
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  gap: 5px;
`

export const Button = styled.button<{color: string}>`
  background-color: ${({color}) => color};
  border: none;
  border-radius: 8px;
  width: 35px;
  height: 35px;
  cursor: pointer;
`

export const Img = styled.img`
  width: 25px;
  height: 25px;
`