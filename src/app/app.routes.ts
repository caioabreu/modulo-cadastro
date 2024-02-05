import { Routes } from '@angular/router';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

export const cadastroRoutes: Routes = [
  {
    path: 'cadastro',
    title: 'Cadastro',
    component: FormCadastroComponent,
  },
];
