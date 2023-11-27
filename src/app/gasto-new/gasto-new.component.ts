import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GastoService } from '../gasto.service';
import { Gasto } from '../model/Gasto';
import { CategoriaService } from '../categoria.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-gasto-new',
  templateUrl: './gasto-new.component.html',
  styleUrls: ['./gasto-new.component.css']
})
export class GastoNewComponent implements OnInit {
  usuario_id: number;
  categoria_id: number;
  monto: number;
  descripcion: string;
  fecha: Date;

  categorias: any = [];
  usuarios: any = [];

  constructor(private router: Router, private gastosService: GastoService,
     private categoriasService: CategoriaService, private usuariosService: UsuarioService) { }

  ngOnInit() { 
    this.loadCategorias();
    this.loadUsuarios();
  }
  
  loadCategorias(){
    this.categoriasService.getCategorias().subscribe(data => {
      this.categorias = data;
    })
  }

  loadUsuarios(){
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    })
  }

  newGasto(){
    const gasto = {
      usuario_id: this.usuario_id,
      categoria_id: this.categoria_id,
      monto: this.monto,
      descripcion: this.descripcion,
      fecha: this.fecha
    }
    this.gastosService.newGasto(gasto);
    this.navigateToHome();
  }

  cancelInsert(){
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/gastos']);
  }

}
