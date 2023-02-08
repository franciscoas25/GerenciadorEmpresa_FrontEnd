import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly BASE_URL = "http://localhost:7020/";

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<Tarefa[]> {
    let param = "api/Tarefa/GetAllAsync";

    return this.http.get<Tarefa[]>(this.BASE_URL + param);
  }

  cadastrar(tarefa: Tarefa): Observable<any> {
    let param = "api/Tarefa/AddAsync";

    return this.http.post<any>(this.BASE_URL + param, tarefa);
  }

  alterarStatus(tarefaId: string): Observable<any> {
    let param = "api/Tarefa/UpdateStatusAsync/";

    return this.http.put<any>(this.BASE_URL + param + tarefaId, null);
  }

  filtrarTarefasPorColaborador(colaboradorId: string): Observable<any> {
    let param = "api/Tarefa/FiltrarTarefasPorColaboradorAsync/";

    return this.http.get<Tarefa[]>(this.BASE_URL + param + colaboradorId);
  }

  removerTarefa(tarefaId: string): Observable<any> {
    let param = "api/Tarefa/DeleteAsync/";

    return this.http.delete<any>(this.BASE_URL + param + tarefaId);
  }
}
