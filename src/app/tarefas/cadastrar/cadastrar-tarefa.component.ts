import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorService } from '../../colaboradores';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;

  tarefa: Tarefa;
  colaboradores: any;

  constructor(private tarefaService: TarefaService, private colaboradorService: ColaboradorService, private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
    this.listarColaboradores();
  }

  cadastrar() {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa).subscribe((response: any) => {
        this.router.navigate(["/tarefas"]);
      });
    }
  }

  listarColaboradores() {
    this.colaboradorService.listarTodos().subscribe((response: any) => {
      this.colaboradores = response;
    });
  }
}
