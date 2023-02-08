import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa, EmpresaService } from '../../empresas';
import { Colaborador, ColaboradorService } from '../shared';

@Component({
  selector: 'app-cadastrar-colaborador',
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrls: ['./cadastrar-colaborador.component.css']
})
export class CadastrarColaboradorComponent implements OnInit {

  @ViewChild('formColaborador') formColaborador: NgForm;

  colaborador: Colaborador;
  empresas: any;

  constructor(private colaboradorService: ColaboradorService, private empresaService: EmpresaService, private router: Router) { }

  ngOnInit() {
    this.colaborador = new Colaborador();
    this.listarEmpresas();
  }

  cadastrar() {
    if (this.formColaborador.form.valid) {
      this.colaboradorService.cadastrar(this.colaborador).subscribe((response: any) => {
        this.router.navigate(["/colaboradores"]);
      });
    }
  }

  listarEmpresas() {
    this.empresaService.listarTodos().subscribe((response: any) => {
      this.empresas = response;
    });
  }
}
