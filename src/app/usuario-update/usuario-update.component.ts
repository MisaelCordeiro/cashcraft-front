import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  usuario: any;

  constructor(private router: Router, private usuariosService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usuariosService.getUsuario(this.route.snapshot.params['id']).subscribe(data => {
      this.usuario = data;
    })
  }

  updateUsuario(){
    this.usuariosService.updateUsuario(this.usuario);
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/usuarios']);
  }

  cancelUpdate(){
    this.navigateToHome();
  }




}
