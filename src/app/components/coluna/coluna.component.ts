import { Component, Input, SimpleChanges } from '@angular/core';
import { Coluna } from 'src/app/models/coluna.model';
import { Tarefa } from 'src/app/models/tarefa.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-coluna',
  templateUrl: './coluna.component.html',
  styleUrls: ['./coluna.component.css']
})
export class ColunaComponent {
  @Input() coluna: Coluna | undefined = undefined;

  public tarefas: Tarefa[] = []

  constructor(private httpService: HttpService){
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.tarefas = []
    this.httpService.getTarefasPorColunaId(this.coluna?.id).subscribe(list => list.forEach(tarefa => this.tarefas.push(tarefa)));
  }
}
