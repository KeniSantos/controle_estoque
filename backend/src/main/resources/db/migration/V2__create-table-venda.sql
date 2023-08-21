create table venda(
    id UUID unique not null,
    produto varchar(100) not null,
    preco bigint not null,
    quantidade int not null,
    datavenda date
)