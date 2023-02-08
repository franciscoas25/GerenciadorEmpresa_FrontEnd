import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TarefaService } from './shared';



@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
