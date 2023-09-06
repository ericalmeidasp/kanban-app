import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coluna } from 'src/app/models/coluna.model';
import { Quadro } from 'src/app/models/quadro.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css'],
})
export class QuadroComponent implements OnChanges {
  @Input() quadro: Quadro | undefined = { id: '', name: '', tipo: '' };

  public colunas : Coluna[] = []

  constructor(private httpService: HttpService){
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.colunas = []
    this.httpService.getColunasPorQuadroId(this.quadro?.id).subscribe(list => list.forEach(coluna => this.colunas.push(coluna)));
  }
}
