import { Routes } from "@angular/router";
import { CadastrarColaboradorComponent } from "./cadastrar";
import { ListarColaboradorComponent } from "./listar";


export const ColaboradorRoutes: Routes = [
  {
    path: 'colaboradores',
    redirectTo: 'colaboradores/listar'
  },
  {
    path: 'colaboradores/listar',
    component: ListarColaboradorComponent
  },
  {
    path: 'colaboradores/cadastrar',
    component: CadastrarColaboradorComponent
  }
];
