import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa, EmpresaService } from '../shared';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  @ViewChild('formEmpresa') formEmpresa: NgForm;

  empresa: Empresa;

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit() {
    this.empresa = new Empresa();
  }

  cadastrar() {
    if (this.formEmpresa.form.valid) {
      this.empresaService.cadastrar(this.empresa).subscribe((response: any) => {
        this.router.navigate(["/empresas"]);
      });
    }
  }
}
