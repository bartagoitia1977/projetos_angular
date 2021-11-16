import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent {
// elementospara fazer uso do Input property
  // a primeira propriedade por convenção não se colocam apelidos
  @Input() public mensagem: string = ""
  // poderia não ter o apelido alerta mas isso é uma boa prática por convenção
  @Input('alerta') public outraMensagem: string = ""


  public exibirMensagemAlerta(): void {
    alert(this.outraMensagem)
  }
}
