import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CategoriaHomeComponent } from './categoria-home/categoria-home.component';
import { MatTableModule, MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatRadioModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaNewComponent } from './categoria-new/categoria-new.component';
import { CategoriaUpdateComponent } from './categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component';
import { UsuarioHomeComponent } from './usuario-home/usuario-home.component';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';
import { GastoHomeComponent } from './gasto-home/gasto-home.component';
import { GastoNewComponent } from './gasto-new/gasto-new.component';
import { GastoUpdateComponent } from './gasto-update/gasto-update.component';
import { DatePipe } from '@angular/common';
import { GastoDeleteComponent } from './gasto-delete/gasto-delete.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaHomeComponent,
    CategoriaNewComponent,
    CategoriaUpdateComponent,
    CategoriaDeleteComponent,
    UsuarioHomeComponent,
    UsuarioNewComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    GastoHomeComponent,
    GastoNewComponent,
    GastoUpdateComponent,
    GastoDeleteComponent,
    ChartsComponent
  ],
  entryComponents: [CategoriaDeleteComponent, UsuarioDeleteComponent, GastoDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    NgxChartsModule

    
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
