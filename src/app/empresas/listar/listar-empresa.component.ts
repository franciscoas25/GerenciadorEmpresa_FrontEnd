import { Component, OnInit } from '@angular/core';
import { Empresa, EmpresaService } from '../shared';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {

  empresas: Empresa[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresas = this.listarTodos();
  }

  listarTodos(): any {
    return this.empresaService.listarTodos().subscribe((response: Empresa[]) => {
      this.empresas = response;
    });
  }

  removerEmpresa($event: any, empresa: Empresa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a empresa "' + empresa.nomeEmpresa + '"?')) {
      this.empresaService.removerEmpresa(empresa.id).subscribe((response: any) => {
        this.empresas = this.listarTodos();
      });
    }
  }
}
