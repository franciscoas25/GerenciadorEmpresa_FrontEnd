import { Routes } from "@angular/router";
import { CadastrarEmpresaComponent } from "./cadastrar";
import { ListarEmpresaComponent } from "./listar";

export const EmpresaRoutes: Routes = [
  {
    path: 'empresas',
    redirectTo: 'empresas/listar'
  },  
  {
    path: 'empresas/listar',
    component: ListarEmpresaComponent
  },
  {
    path: 'empresas/cadastrar',
    component: CadastrarEmpresaComponent
  }  
];
