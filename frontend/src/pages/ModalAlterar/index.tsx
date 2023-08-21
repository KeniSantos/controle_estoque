import { Container, ContainerPrincipal, Form, Label, Input, BotaoCustomizado, Div} from "./styles";

interface ProdutoProps {
  id: string,
  produto: string,
  preco: number,
  precoVenda: number,
  quantidade: number,
  dataVencimento: string
}

interface ModalProps {
  visible: boolean,
  cancelar: () => void,
  itemAlterar: ProdutoProps
  alterar: (item: ProdutoProps) => void,
  confirmar: () => void
}

export default function ModalAlterar({visible, cancelar, itemAlterar, alterar, confirmar}: ModalProps) {
  return (
    (visible ? (
      <ContainerPrincipal>
        <Container>
          <Form>
            <Label>Produto</Label>
            <Input type="text" value={itemAlterar.produto} onChange={(e) => alterar({...itemAlterar, produto: e.target.value})}/>
            <Label>Preço</Label>
            <Input type="number" value={itemAlterar.preco} onChange={(e) => alterar({...itemAlterar, preco: Number(e.target.value)})}/>
            <Label>Preço de Venda</Label>
            <Input type="number" value={itemAlterar.precoVenda} onChange={(e) => alterar({...itemAlterar, precoVenda: Number(e.target.value)})}/>
            <Label>Quantidade</Label>
            <Input type="number" value={itemAlterar.quantidade} onChange={(e) => alterar({...itemAlterar, quantidade: Number(e.target.value)})}/>
            <Label>Data de Vencimento</Label>
            <Input type="date" value={itemAlterar.dataVencimento} onChange={(e) => alterar({...itemAlterar, dataVencimento: e.target.value})}/>
          </Form>
          <Div>
            <BotaoCustomizado color="#ff0011" onClick={() => cancelar()}>Cancelar</BotaoCustomizado>
            <BotaoCustomizado color="#0022FF" onClick={() => confirmar()}>Confirmar</BotaoCustomizado>
          </Div>
        </Container>
      </ContainerPrincipal>
    ): null)
  )
}