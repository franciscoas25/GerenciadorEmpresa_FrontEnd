import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaService } from './shared';
import { ListarEmpresaComponent } from './listar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarEmpresaComponent } from './cadastrar';


@NgModule({
  declarations: [
    ListarEmpresaComponent,
    CadastrarEmpresaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    EmpresaService
  ]
})
export class EmpresasModule { }
