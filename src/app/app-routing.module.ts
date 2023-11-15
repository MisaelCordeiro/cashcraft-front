import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaHomeComponent } from './categoria-home/categoria-home.component';
import { CategoriaNewComponent } from './categoria-new/categoria-new.component';
import { CategoriaUpdateComponent } from './categoria-update/categoria-update.component';


const routes: Routes = [
  { path: 'categorias', component: CategoriaHomeComponent},
  { path: 'categoria/new', component: CategoriaNewComponent},
  { path: 'categoria/update/:id', component: CategoriaUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
