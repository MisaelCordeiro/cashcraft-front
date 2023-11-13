import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-home',
  templateUrl: './categoria-home.component.html',
  styleUrls: ['./categoria-home.component.css']
})
export class CategoriaHomeComponent implements OnInit {
  categorias: any = [];
  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    })
  }

  displayedColumns: string[] = ['id', 'nombre'];

}
