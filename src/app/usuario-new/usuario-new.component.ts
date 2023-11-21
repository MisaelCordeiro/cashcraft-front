import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css']
})
export class UsuarioNewComponent implements OnInit {
  username: string;
  password: string;
  email: string;

  constructor(private router: Router, private usuariosServicios: UsuarioService) { }

  ngOnInit() {
  }



  newUsuario(){
    const usuario = {
      username: this.username,
      password: this.password,
      email: this.email
    }
    this.usuariosServicios.newUsuario(usuario);
    this.navigateToHome();
  }

  cancelInsert(){
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/usuarios']);
  }

}
