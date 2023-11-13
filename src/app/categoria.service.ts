import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any> {
    const url = 'http://localhost:30030/categorias/getAll';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, {headers });
  }




  newCategoria(categoria: any): void{
    const url = 'http://localhost:30030/categorias/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = categoria;
    this.http.post(url, body, {headers}).subscribe();
  }
}
