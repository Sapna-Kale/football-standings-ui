import { Routes } from '@angular/router';
import {StandingsComponent} from './standings/standings.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path : '', component : StandingsComponent,}
];
