import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { Index } from './components/index/index';
import { CapturaUsuario } from './features/usuarios/pages/capturar-usuario/capturar-usuario';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'index', component: Index },
  { path: 'usuarios/captura', component: CapturaUsuario }
];