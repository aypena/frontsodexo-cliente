import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(){
    return this.http.get('http://localhost:8080/api/FeaturedNewsEntitys');
  }

  create (noticia:any){
    return this.http.post('http://localhost:8080/api/FeaturedNewsEntitys',noticia);
  }

  update(href:string,noticia:any){
    return this.http.put( href,noticia);
  }
  delete(href: string){
    return this.http.delete(href);
  }
}
