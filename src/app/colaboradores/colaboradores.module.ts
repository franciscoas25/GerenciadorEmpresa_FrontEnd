import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorService } from './shared';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListarColaboradorComponent } from './listar';
import { CadastrarColaboradorComponent } from './cadastrar';



@NgModule({
  declarations: [
    ListarColaboradorComponent,
    CadastrarColaboradorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ColaboradorService
  ]
})
export class ColaboradoresModule { }
