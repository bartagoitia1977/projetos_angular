import { Component } from '@angular/core';

@Component({
  selector: 'app-mega-salto',
  templateUrl: './mega-salto.component.html',
  styleUrls: ['./mega-salto.component.css']
})
export class MegaSaltoComponent {
  //criar a função de exibição de dados no componente pai
  public exibirDados(dados:any) {
    let receptora: string = 'Obrigado por se cadastrar, ' + dados.nome + '.' + '\n';
    receptora += 'O e-mail ' + dados.email + ' foi cadastrado com sucesso! Rapaizzz!!!'
    alert(receptora)
  }
  
  //Aqui serão criadas as propriedades que serão enviadas para secundario.component.ts
  public texto: string = "Este será o texto que será exibido na janela alert"
  public outroTexto: string = "Texto enviado do componente principal (pai) para o componente secundário (filho)"
}

 
 