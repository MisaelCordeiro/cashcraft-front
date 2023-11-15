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

    return this.http.get<any>(url, {headers})
  }

  getCategoria(g_id: number): Observable<any>{
    const url = "http://localhost:30030/categorias/get";
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: g_id});
    return this.http.post(url, body, {headers});
  }



  newCategoria(categoria: any): void{
    const url = 'http://localhost:30030/categorias/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = categoria;
    this.http.post(url, body, {headers}).subscribe();
  }

  updateCategoria(categoria: any): void{
    const url = "http://localhost:30030/categorias/update";
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = categoria;
    this.http.put(url, body, {headers}).subscribe();
  }

  deleteCategoria(id: number): void{
    const url = "http://localhost:30030/categorias/delete";
    const body = { id: id };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
  }
}
