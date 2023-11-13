import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-new',
  templateUrl: './categoria-new.component.html',
  styleUrls: ['./categoria-new.component.css']
})
export class CategoriaNewComponent implements OnInit {
  nombre: string;

  constructor(private router: Router, private categoriaService: CategoriaService) { }

  ngOnInit() {
  }

  newCategoria(){
    const categoria = {
      nombre: this.nombre
    }
    this.categoriaService.newCategoria(categoria);
    this.navigateHome();
  }
  cancelInsert(){
    this.navigateHome();
  }

  navigateHome(){
    this.router.navigate(['/categorias']);
  }

}
