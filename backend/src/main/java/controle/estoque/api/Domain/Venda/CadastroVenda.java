package controle.estoque.api.Domain.Venda;

import jakarta.validation.constraints.NotNull;

import java.math.BigInteger;
import java.time.LocalDate;

public record CadastroVenda(

        @NotNull
        String produto,

        @NotNull
        BigInteger preco,

        @NotNull
        Integer quantidade,

        @NotNull
        LocalDate datavenda
) {
}
