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

@NgModule({
  declarations: [
    AppComponent,
    CategoriaHomeComponent,
    CategoriaNewComponent,
    CategoriaUpdateComponent,
    CategoriaDeleteComponent
  ],
  entryComponents: [CategoriaDeleteComponent],
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

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
