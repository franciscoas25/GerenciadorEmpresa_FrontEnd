import { Component, OnInit } from '@angular/core';
import { Colaborador, ColaboradorService } from '../../colaboradores';
import { Empresa, EmpresaService } from '../../empresas';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];
  empresas: Empresa[];
  colaboradores: Colaborador[];

  constructor(private tarefaService: TarefaService, private empresaService: EmpresaService, private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.tarefas = this.listarTarefas();
    this.empresas = this.listarEmpresas();
    this.colaboradores = this.listarColaboradores();
  }

  listarTarefas(): any {
    return this.tarefaService.listarTodas().subscribe((response: Tarefa[]) => {
      this.tarefas = response;
    });
  }

  listarEmpresas(): any {
    return this.empresaService.listarTodos().subscribe((response: Empresa[]) => {
      this.empresas = response;
    });
  }

  listarColaboradores(): any {
    return this.colaboradorService.listarTodos().subscribe((response: Colaborador[]) => {
      this.colaboradores = response;
    });
  }
  
  alterarStatus(tarefaId: string, nomeTarefa: string): any {
    if (confirm('Deseja alterar o status da tarefa "' + nomeTarefa + '"?')) {
      return this.tarefaService.alterarStatus(tarefaId).subscribe((response: any) => {
        this.tarefas = this.listarTarefas();
      });
    }
  }

  filtrarColaboradoresPorEmpresa(empresaId: string): any {
    return this.colaboradorService.filtrarColaboradoresPorEmpresa(empresaId).subscribe((response: Colaborador[]) => {
      this.colaboradores = response;
    });
  }

  filtrar(colaboradorId: string): any {
    if (colaboradorId === "0") {
      this.tarefas = this.listarTarefas();
    }
    else {
      return this.tarefaService.filtrarTarefasPorColaborador(colaboradorId).subscribe((response: Tarefa[]) => {
        this.tarefas = response;
      });
    }
  }

  removerTarefa($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nomeTarefa + '"?')) {
      this.tarefaService.removerTarefa(tarefa.id).subscribe((response: any) => {
        this.tarefas = this.listarTarefas();
      });
    }
  }
}
