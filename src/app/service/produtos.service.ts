import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Produtos } from './../model/Produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(  private http: HttpClient) { }

token = {
  headers:new HttpHeaders().set('Authorization', environment.token)
}

 getAllProdutos(): Observable<Produtos[]>{
  return this.http.get<Produtos[]>('https://coopgreen.herokuapp.com/produtos', this.token)
}

getByIdProdutos(id:number):Observable<Produtos>{
  return this.http.get<Produtos>(`https://coopgreen.herokuapp.com/produtos/${id}`,this.token)
}

postProduto(produtos:Produtos):Observable<Produtos>{
  return this.http.post<Produtos>('https://coopgreen.herokuapp.com/produtos', produtos ,this.token)
}

putProduto(produtos:Produtos):Observable<Produtos>{
    return this.http.put<Produtos>('https://coopgreen.herokuapp.com/produtos/',produtos, this.token)
}

deleteProduto(id:number){
    return this.http.delete(`https://coopgreen.herokuapp.com/produtos/${id}`,this.token)
}


}
