import { Component, Inject , OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {
  categoriaId: number;

  constructor(private categoriaService: CategoriaService, public dialogRef: MatDialogRef<CategoriaDeleteComponent>,
             @Inject(MAT_DIALOG_DATA) public data : { categoriaId: number}, private router: Router) { 
              this.categoriaId = data.categoriaId;
             }


  ngOnInit() {
  }

  confirm(): void {
    this.categoriaService.deleteCategoria(this.categoriaId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/categorias']);
  }

}
