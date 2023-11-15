import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {
  categoria: any;

  constructor(private router: Router, private categoriaService: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoriaService.getCategoria(this.route.snapshot.params['id']).subscribe(data => {
      this.categoria = data;
    })
  }

  updateCategoria(){
    this.categoriaService.updateCategoria(this.categoria);
    this.navigateCategoriaHome();
  }

  cancelInsert(){
    this.navigateCategoriaHome();
  }

  navigateCategoriaHome(){
    this.router.navigate(['/categorias']);
  }

}
