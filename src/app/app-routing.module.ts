import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule) // el modulo que regresa es el authmodule
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot( routes ) // rutas principales
  ],
  exports: [
    RouterModule // se exporta para que este a disposicion de toda la app
  ]
})
export class AppRoutingModule { }
