package controle.estoque.api.Domain.Produto;

import controle.estoque.api.Domain.Venda.CadastroVenda;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProdutoRepository extends JpaRepository<Produto, UUID> {

    Produto findByProduto(String produto);

    Produto getReferenceByProduto(String dados);
}
