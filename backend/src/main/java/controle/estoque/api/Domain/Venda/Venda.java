package controle.estoque.api.Domain.Venda;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "venda")
@Entity(name = "Venda")
@EqualsAndHashCode(of = "id")
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String produto;

    private BigInteger preco;

    private Integer quantidade;

    private LocalDate datavenda;

    public Venda(CadastroVenda dados){
        this.produto = dados.produto();
        this.preco = dados.preco();
        this.quantidade = dados.quantidade();
        this.datavenda = dados.datavenda();
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

    public Integer getQuantidade() {
        return quantidade;
    }

    public LocalDate getDatavenda() {
        return datavenda;
    }
}