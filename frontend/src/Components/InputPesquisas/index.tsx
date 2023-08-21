import {Label, Input} from "./styles";

interface InputDigitacaoProps {
  conteudo: any,
  tipo: string,
  valor: any,
  placeholder: string,
  onChange: (value: any) => void
}


export default function InputDigitacao({conteudo, tipo, valor, placeholder, onChange} : InputDigitacaoProps) {
  return (
    <div>
      <Label>{conteudo}</Label>
      <Input type={tipo} value={valor} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}