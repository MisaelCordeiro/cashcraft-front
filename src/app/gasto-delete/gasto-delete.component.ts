import { Component, Inject ,OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gasto-delete',
  templateUrl: './gasto-delete.component.html',
  styleUrls: ['./gasto-delete.component.css']
})
export class GastoDeleteComponent implements OnInit {
  gastoId: number;

  constructor(private gastoService: GastoService, public dialogRef: MatDialogRef<GastoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {gastoId: number}, private router: Router) {
      this.gastoId = data.gastoId;
     }

  ngOnInit() {
  }

  confirm(): void{
    this.gastoService.deleteGasto(this.gastoId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/gastos']);
  }

}
