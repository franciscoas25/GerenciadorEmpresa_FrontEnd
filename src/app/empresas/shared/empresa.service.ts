import { Injectable } from '@angular/core';
import { Empresa } from './empresa.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly BASE_URL = "http://localhost:7020/";

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Empresa[]> {
    let param = "api/Empresa/GetAllAsync";

    return this.http.get<Empresa[]>(this.BASE_URL + param);        
  }

  cadastrar(empresa: Empresa): Observable<any> {
    let param = "api/Empresa/AddAsync";

    return this.http.post<any>(this.BASE_URL + param, empresa);
  }

  removerEmpresa(empresaId: string): Observable<any> {
    let param = "api/Empresa/DeleteAsync/";

    return this.http.delete<any>(this.BASE_URL + param + empresaId);
  }
}
