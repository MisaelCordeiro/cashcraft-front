import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import { CategoriaDeleteComponent } from '../categoria-delete/categoria-delete.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-categoria-home',
  templateUrl: './categoria-home.component.html',
  styleUrls: ['./categoria-home.component.css']
})
export class CategoriaHomeComponent implements OnInit {
  categorias: any = [];
  constructor(private categoriaService: CategoriaService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    })
  }

  updateCategoria(categoria: any){
    this.router.navigate(['categoria/update', categoria]);
  }

  openDeleteDialog(categoriaId: number): void{
    const dialogRef = this.dialog.open(CategoriaDeleteComponent, { data: { categoriaId: categoriaId }});
  }

  displayedColumns: string[] = ['id', 'nombre', 'actions'];

}
