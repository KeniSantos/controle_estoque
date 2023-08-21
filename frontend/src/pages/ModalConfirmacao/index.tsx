import {Container, ContainerPrincipal, BotaoCustomizado} from './styles';

interface ModalProps {
  visible: boolean,
  cancelar: () => void,
  confirmar: () => void,
}

export default function ModelConfirmacao({visible, cancelar, confirmar}: ModalProps) {
  return (
    (visible ? (
      <ContainerPrincipal>
        <Container>
          <BotaoCustomizado color="#0022FF" onClick={() => confirmar()} >Confirmar</BotaoCustomizado>
          <BotaoCustomizado color="#ff0011" onClick={() => cancelar()} >Cancelar</BotaoCustomizado>
        </Container>
      </ContainerPrincipal>
    ): null)
  )
}