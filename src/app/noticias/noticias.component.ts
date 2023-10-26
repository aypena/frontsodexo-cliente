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
noticiaEnEdicion:any;

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
    if (this.noticiaEnEdicion){
      this.noticiaService.update(this.noticiaEnEdicion._links.self.href,values)
      .subscribe({
          next: ()=>{
            this.getAll();
            this.noticiaEnEdicion=null;
            this.formulario.setValue({
              title:'',
              description:'',
              summary:'',
              datePublication:''

            })
          },
            error: ()=>{
              
            }
          })
    }else{
      this.noticiaService.create(values)
      .subscribe({
          next: ()=>{
            this.getAll();
            this.formulario.setValue({
              title:'',
              description:'',
              summary:'',
              datePublication:''

            })
          },
            error: ()=>{
              
            }
          })

                  
         

    }
      
  }

  edit(noticia:any){
    this.noticiaEnEdicion= noticia;
    this.formulario.setValue({
      title: noticia.title,
      description: noticia.description,
      summary: noticia.summary,
      datePublication:noticia.datePublication
  })
  }

  delete(noticia:any){
    const ok = confirm('¿Estas seguro de eliminar esta noticia?')
if(ok){
  this.noticiaService.delete(noticia._links.self.href)
  .subscribe(() => (
  this.getAll()
  ));

}

    

  }
}
