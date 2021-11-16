
//EventEmitter e Output são recursos para o uso do Output
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
//criando o "anunciador" de evento que enviará
// um conjunto de dados do componente filho para o componente pai
  @Output() anunciador = new EventEmitter<any>()
  
// criar a propriedade que receberá o conjunto de dados
  public objDados: any = {
    nome: '',
    email: ''
  }

// criar a função que, junto com o anunciador, enviar os dados
  public enviarDados(): void {
    this.anunciador.emit(this.objDados)
  }

}
