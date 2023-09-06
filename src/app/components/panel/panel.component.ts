import { Component, OnInit } from '@angular/core';
import { Quadro } from 'src/app/models/quadro.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent  implements OnInit {
  public quadros: Quadro[] = [];

  public selectedQuadro: Quadro | undefined;

  constructor(private httpService: HttpService){
  }

  ngOnInit() {
    this.httpService.getQuadros().subscribe(list => list.forEach(quadro => this.quadros.push(quadro)));
    this.selectedQuadro = this.quadros.at(0)
    console.log(this.quadros)
  }

  public selecionarQuadro(quadro: Quadro) {
      this.selectedQuadro = quadro
      console.log( this.selectedQuadro)
  }
}
