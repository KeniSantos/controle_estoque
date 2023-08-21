import {useState} from 'react';
import {ContainerPrincipal, Container, Input, Form, Label, Div, BotaoCustomizado, DivBotao} from "./styles";

interface ModalProps {
  precoVenda: number,
  produto: string,
  vencimento: string,
  quantidadeMaxima: number,
  visible: boolean,
  onClickConfirmar: (quantidade: number, dataVenda: string) => void,
  onClickCancelar: () => void
}

export default function Modal({  produto, precoVenda, vencimento, quantidadeMaxima, visible, onClickConfirmar, onClickCancelar }: ModalProps) {
  const [quantidade, setQuantidade] = useState(0);
  const [dataVenda, setDataVenda] = useState('');

  function setValor(valor: number) {
    if(valor > quantidadeMaxima){
      setQuantidade(quantidadeMaxima)
    } else {
      setQuantidade(valor);
    }
  }

  return (
    (visible ? (
      <ContainerPrincipal>
        <Container>
          <Form>
            <Div>
              <Label>Produto</Label>
              <Input value={produto} disabled />
            </Div>
            <Div>
              <Label>Vencimento</Label>
              <Input value={`${vencimento === undefined ? 'Sem vencimento informado' : vencimento}`} disabled />
            </Div>
            <Div>
              <Label>Preço</Label>
              <Input value={`R$ ${precoVenda}`}  disabled/>
            </Div>
            <Div>
              <Label>Quantidade</Label>
              <Input type="number" value={quantidade} onChange={(e) => setValor(Number(e.target.value))} />
            </Div>
            <Div>
              <Label>Data Venda</Label>
              <Input type="date" value={dataVenda} onChange={(e) => setDataVenda(e.target.value)} />
            </Div>
          </Form>
          <DivBotao>
            <BotaoCustomizado onClick={() => onClickConfirmar(quantidade, dataVenda)} color="#0022FF">Confirmar</BotaoCustomizado>
            <BotaoCustomizado onClick={() => onClickCancelar()} color="#ff0011">Cancelar</BotaoCustomizado>
          </DivBotao>
        </Container>
      </ContainerPrincipal>
    ) : (null))
  )
}