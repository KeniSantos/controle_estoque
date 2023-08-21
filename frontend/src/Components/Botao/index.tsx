import {Button} from "./styles";

interface BotaoInterface {
  children: any
}

export default function Botao({children}: BotaoInterface) {
  return (
    <Button>{children}</Button>
  )
}