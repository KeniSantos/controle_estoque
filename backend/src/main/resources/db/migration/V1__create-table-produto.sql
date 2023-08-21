create table produto (
    id UUID not null,
    produto varchar(100) unique not null,
    preco bigint not null,
    precoVenda bigint not null,
    quantidade int not null,
    dataVencimento date
)