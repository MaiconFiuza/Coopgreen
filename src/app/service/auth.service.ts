import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from './../model/UserLogin';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {     headers : new HttpHeaders().set('Authorization',environment.token)   }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://coopgreen.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://coopgreen.herokuapp.com/usuarios/cadastrar', user)

  }

  getByIdUser(id : number):Observable<User>{
    return this.http.get<User>(`https://coopgreen.herokuapp.com/usuarios/${id}`, this.token)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }


}
