import {Label, Input, Div} from "./styles";

interface InputDigitacaoProps {
  conteudo: string,
  tipo: string,
  valor: string,
  placeholder: string,
  onChange: (value: string) => void
}


export default function InputDigitacao({conteudo, tipo, valor, placeholder, onChange} : InputDigitacaoProps) {
  return (
    <Div>
      <Label>{conteudo}</Label>
      <Input type={tipo} value={valor} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </Div>
  )
}