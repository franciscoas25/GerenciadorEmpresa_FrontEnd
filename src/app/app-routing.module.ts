import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorRoutes } from './colaboradores';
import { EmpresaRoutes } from './empresas';
import { TarefaRoutes } from './tarefas';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'empresas/listar',
    pathMatch: 'full'
  },
  ...EmpresaRoutes,
  ...ColaboradorRoutes,
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
