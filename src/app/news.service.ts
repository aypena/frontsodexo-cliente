import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get('http://localhost:8080/api/FeaturedNewsEntitys');
  }

  create (news:any){
    return this.http.post('http://localhost:8080/api/FeaturedNewsEntitys',news);
  }

  update(title:string,news:any){
    return this.http.put('http://localhost:8080/api/FeaturedNewsEntitys/' + title ,news);
  }
  delete(id:number){
    return this.http.delete('http://localhost:8080/api/FeaturedNewsEntitys/' + id);
  }
}
