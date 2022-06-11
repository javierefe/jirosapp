import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild ( routes ) // rutas principales forRoot, rutas hijas forChild
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
