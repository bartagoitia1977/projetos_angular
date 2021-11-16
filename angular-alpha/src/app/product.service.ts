import { Injectable } from '@angular/core';

//importando o model

import { Produto } from "./product";
//importando logger service
import { LoggerService } from './logger.service';

@Injectable()

export class ProductService {

  constructor(private loggerService: LoggerService) {
    this.loggerService.verificacao('ProductService foi construído!')
   }
  //criando o conteíudo que será oferecido no service
  public getProdutos(){
    this.loggerService.verificacao('Método / função getProdutos foi chamado')
    let produtos: Produto[]
    //criar lista de produtos
    produtos = [
      new Produto(1,'Quadro Yoda', 199),
      new Produto(2,'Máscara Darth Vader', 159),
      new Produto(3,'Light Saber', 89)
    ]
    this.loggerService.verificacao(produtos)
    return produtos
  }

}
