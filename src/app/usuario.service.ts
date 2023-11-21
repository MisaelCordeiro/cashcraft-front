import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient ) { }

  getUsuarios(): Observable<any> {
    const url ='http://localhost:30030/usuarios/getAll';
    const headers = new HttpHeaders();

    return this.http.get<any>(url, {headers});
  }

  getUsuario(u_id: number): Observable<any>{
    const url = 'http://localhost:30030/usuarios/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: u_id});
    return this.http.post(url, body, {headers});
  }

  newUsuario(usuario: any): void{
    const url = 'http://localhost:30030/usuarios/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = usuario;
    this.http.post(url, body, {headers}).subscribe();
  }

  updateUsuario(usuario: any): void{
    const url = 'http://localhost:30030/usuarios/update';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = usuario;
    this.http.put(url, body, {headers}).subscribe();
  }

  deleteUsuario(id: number): void{
    const url = 'http://localhost:30030/usuarios/delete';
    const body = {id: id};
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
  }


}
