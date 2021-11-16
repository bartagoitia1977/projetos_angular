import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  /*AQUI VAMOS IMPLEMENTAR O CONJUNTO DE VARIÁVEIS PARA 
  VINCULAR COM VIEW */

  public x: number = 10 // variavel: tipo finca o tipo no typescript
  public umArray: Array<number> = [10,26,89]
  public dataHoje: Date = new Date()
  public statusBooleano: boolean = false

  public exibirTexto(): string {
    return 'Texto retornado a partir de uma função'
  }

}
