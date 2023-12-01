import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-gasto-home',
  templateUrl: './gasto-home.component.html',
  styleUrls: ['./gasto-home.component.css']
})
export class GastoHomeComponent implements OnInit {
  gastos: any = [];

  constructor(private gastosService: GastoService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.gastosService.getGastos().subscribe(data => {
      this.gastos = data;
    })
  }

  editGasto(gasto: any){
    this.router.navigate(['gasto/update', gasto]);

  }

  openDeleteDialog(gastoId: number): void{
    
  }

  displayedColumns: string[] = ['id', 'usuario_id', 'categoria_id', 'monto', 'descripcion', 'fecha', 'actions'];

}
