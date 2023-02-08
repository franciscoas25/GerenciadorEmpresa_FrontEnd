import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from './colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService implements OnInit {

  private readonly BASE_URL = "http://localhost:7020/";

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  listarTodos(): Observable<Colaborador[]> {
    let param = "api/Colaborador/GetAllAsync";

    return this.http.get<Colaborador[]>(this.BASE_URL + param);
  }

  cadastrar(colaborador: Colaborador): Observable<any> {
    let param = "api/Colaborador/AddAsync";

    return this.http.post<any>(this.BASE_URL + param, colaborador);
  }

  filtrarColaboradoresPorEmpresa(empresaId: string): Observable<Colaborador[]> {
    let param = "api/Colaborador/FiltrarColaboradoresPorEmpresaAsync/";

    return this.http.get<Colaborador[]>(this.BASE_URL + param + empresaId);
  }

  removerColaborador(colaboradorId: string): Observable<any> {
    let param = "api/Colaborador/DeleteAsync/";

    return this.http.delete<any>(this.BASE_URL + param + colaboradorId);
  }
}
