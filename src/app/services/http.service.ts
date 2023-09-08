import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, filter, map } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Quadro } from '../models/quadro.model';
import { Coluna } from '../models/coluna.model';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8080/api/kanban/quadro"
  urlColunasQuadro = "http://localhost:8080/api/kanban/coluna/quadro/"
  urlTarefasColunas = "http://localhost:8080/api/kanban/tarefa/coluna/"
  
  options = {
    headers: {
      "Authorization": "Bearer token"
    }
  }


  public getQuadros(){
    return this.httpClient.get<Quadro[]>(this.url,this.options)
  }

  public getColunasPorQuadroId(quadroId : string | undefined){
    return this.httpClient.get<Coluna[]>(this.urlColunasQuadro + quadroId,this.options)
  }

  public getTarefasPorColunaId(colunaId : string | undefined){
    return this.httpClient.get<Tarefa[]>(this.urlTarefasColunas + colunaId,this.options)
  }
}
