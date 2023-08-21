package controle.estoque.api.Domain.Produto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "produto")
@Entity(name = "Produto")
@EqualsAndHashCode(of = "id")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String produto;

    private BigInteger preco;

    private BigInteger precovenda;

    private Integer quantidade;

    private LocalDate datavencimento;

    public Produto(DadosCadastroProduto dados) {
        this.produto = dados.produto();
        this.preco = dados.preco();
        this.precovenda = dados.precovenda();
        this.quantidade = dados.quantidade();
        this.datavencimento = dados.datavencimento();
    }

    public void alterar(DadosAlterarProduto dados){
        if(dados.produto() != null){
            this.produto = dados.produto();
        }
        if(dados.preco() != null){
            this.preco = dados.preco();
        }
        if(dados.precovenda() != null) {
            this.precovenda = dados.precovenda();
        }
        if(this.quantidade != dados.quantidade()){
            this.quantidade = dados.quantidade();
        }
        if(dados.datavencimento() != null) {
            this.datavencimento = dados.datavencimento();
        }
    }

    public UUID getId() {
        return id;
    }

    public String getProduto() {
        return produto;
    }

    public BigInteger getPreco() {
        return preco;
    }

    public BigInteger getPrecovenda() {
        return precovenda;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public LocalDate getDatavencimento() {
        return datavencimento;
    }

    public void alterarQuantidade(Integer dados) {
        this.quantidade = this.quantidade - dados;
    }
}
