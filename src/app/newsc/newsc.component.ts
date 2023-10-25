import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-newsc',
  templateUrl: './newsc.component.html',
  styleUrls: ['./newsc.component.css']
})
export class NewscComponent implements OnInit {
  newsg: any[]=[];
  
  constructor(
    private newsservice: NewsService
  ){
    
  }
  ngOnInit(): void {
    this.newsservice.getAll()
    .subscribe((newsa: any) =>{
      console.log('noticia',this.newsg)
      this.newsg =newsa._embedded.FeaturedNewsEntitys;
    })
  }

}
