import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private http: HttpClient) { }

  getGastos(): Observable<any>{
    const url = "http://localhost:30030/gastos/getAll";
    const headers = new HttpHeaders();

    return this.http.get<any>(url, {headers});
  }

  getGasto(g_id: number): Observable<any> {
    const url = "http://localhost:30030/gastos/get";
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const body = JSON.stringify({id: g_id});
    return this.http.post(url, body, {headers});
  }

  newGasto(gasto: any): void{
    const url = "http://localhost:30030/gastos/add";
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const body = gasto;
    this.http.post(url, body, {headers}).subscribe();
  }

  updateGasto(gasto: any): void{
    const url = "http://localhost:30030/gastos/update";
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const body = gasto;
    this.http.put(url, body, {headers}).subscribe();
  }

  deleteGasto(gastoId: number): void{
    const url = "http://localhost:30030/gastos/delete";
    const body = {id: gastoId};
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
  }

}
