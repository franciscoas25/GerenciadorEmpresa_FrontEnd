import { Component, OnInit } from '@angular/core';
import { Colaborador, ColaboradorService } from '../shared';

@Component({
  selector: 'app-listar-colaborador',
  templateUrl: './listar-colaborador.component.html',
  styleUrls: ['./listar-colaborador.component.css']
})
export class ListarColaboradorComponent implements OnInit {

  colaboradores: Colaborador[];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.colaboradores = this.listarTodos();
  }

  listarTodos(): any {
    return this.colaboradorService.listarTodos().subscribe((response: Colaborador[]) => {
      this.colaboradores = response;
    });
  }

  removerColaborador($event: any, colaborador: Colaborador): void {
    $event.preventDefault();
    if (confirm('Deseja remover o colaborador "' + colaborador.nomeColaborador + '"?')) {
      this.colaboradorService.removerColaborador(colaborador.id).subscribe((response: any) => {
        this.colaboradores = this.listarTodos();
      });
    }
  }
}
