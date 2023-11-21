import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-usuario-home',
  templateUrl: './usuario-home.component.html',
  styleUrls: ['./usuario-home.component.css']
})
export class UsuarioHomeComponent implements OnInit {
  usuarios: any = [];
  constructor(private usuariosService: UsuarioService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data.map(usuario => ({
        ...usuario, showPassword: false
      }));
    })
  }

  editUsuario(usuario: any){
    this.router.navigate(['usuario/update', usuario]);
  }

  togglePassword(usuario: any): void{
    usuario.showPassword = !usuario.showPassword;

  }







  displayedColumns: string[] = ['id', 'username', 'password', 'email','actions'];

}
