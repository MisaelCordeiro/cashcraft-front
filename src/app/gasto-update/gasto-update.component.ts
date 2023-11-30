import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoService } from '../gasto.service';
import { CategoriaService } from '../categoria.service';
import { UsuarioService } from '../usuario.service';
import { Gasto } from '../model/Gasto';
import { Categoria } from '../model/Categoria';
import { Usuario } from '../model/Usuario';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gasto-update',
  templateUrl: './gasto-update.component.html',
  styleUrls: ['./gasto-update.component.css']
})
export class GastoUpdateComponent implements OnInit {
  gasto: Gasto = new Gasto;
  categoria: Categoria = new Categoria;
  usuario: Usuario = new Usuario;

  categorias: any = [];
  usuarios: any = [];


  constructor(private router: Router, private gastosService: GastoService, private categoriaService: CategoriaService, private usuarioService: UsuarioService,
    private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    this.loadGasto();
    this.loadUsuarios();
    this.loadCategorias();
  }


  loadGasto(){
    this.gastosService.getGasto(this.route.snapshot.params['id']).subscribe(data => {
      this.gasto = data;
    });

  }

  loadCategorias(){
    this.categoriaService.getCategorias().subscribe(data =>{
      this.categorias = data;
    })
  }

  loadUsuarios(){
    this.usuarioService.getUsuarios().subscribe(data =>{
      this.usuarios = data;
    })
  }

  cancelInsert(){
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/gastos']);
  }


  updateGasto(){}

}
