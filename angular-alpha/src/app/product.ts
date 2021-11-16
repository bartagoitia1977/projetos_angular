//criando o model domain
export class Produto {
    constructor(idProduto: number, nomeProduto: string, precoProduto: number) {
        this.idProduto = idProduto
        this.nomeProduto = nomeProduto
        this.precoProduto = precoProduto

    }
    //no TypeScript é necessário inicializar as variávei sthis dentro da classe
    idProduto: number
    nomeProduto: string
    precoProduto: number
}