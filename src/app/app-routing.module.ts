import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaHomeComponent } from './categoria-home/categoria-home.component';
import { CategoriaNewComponent } from './categoria-new/categoria-new.component';
import { CategoriaUpdateComponent } from './categoria-update/categoria-update.component';
import { UsuarioHomeComponent } from './usuario-home/usuario-home.component';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { GastoHomeComponent } from './gasto-home/gasto-home.component';
import { GastoNewComponent } from './gasto-new/gasto-new.component';
import { GastoUpdateComponent } from './gasto-update/gasto-update.component';


const routes: Routes = [
  { path: 'categorias', component: CategoriaHomeComponent},
  { path: 'categoria/new', component: CategoriaNewComponent},
  { path: 'categoria/update/:id', component: CategoriaUpdateComponent},
  { path: 'usuarios', component: UsuarioHomeComponent},
  { path: 'usuario/new', component: UsuarioNewComponent},
  { path: 'usuario/update/:id', component: UsuarioUpdateComponent},
  { path: 'gastos', component: GastoHomeComponent},
  { path: 'gasto/new', component: GastoNewComponent},
  { path: 'gasto/update/:id', component: GastoUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
