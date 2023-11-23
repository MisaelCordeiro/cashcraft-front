import { Component, Inject, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {
  usuarioId: number;

  constructor(private usuarioService: UsuarioService, public dialogRef: MatDialogRef<UsuarioDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data : {usuarioId: number}, private router: Router) {
      this.usuarioId = data.usuarioId;
     }

  ngOnInit() {
  }

  confirm(): void {
    this.usuarioService.deleteUsuario(this.usuarioId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/usuarios']);

  }

}
