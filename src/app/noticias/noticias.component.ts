import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../noticia.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
noticias:any[]=[];
formulario:FormGroup = this.fb.group({
  title:[],
  description:[],
  summary:[],
  datePublication:[]

});

  constructor(
    private noticiaService:NoticiaService,
    private fb:FormBuilder

  ){}
  ngOnInit(): void {
this.getAll();
   
  }
  getAll(){
    this.noticiaService.getAll().subscribe((noticias:any) =>{
      console.log('noticia',noticias)
      this.noticias=noticias._embedded.FeaturedNewsEntitys;
    })


  }

  save(){
    const values = this.formulario.value;
    this.noticiaService.create(values).subscribe(() =>{
      this.noticiaService.getAll()
      .subscribe((noticias:any) => {
        console.log('noticia',noticias);
        this.noticias=noticias._embedded.FeaturedNewsEntitys;
      })
    })    
  }
}
