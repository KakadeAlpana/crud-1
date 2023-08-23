import { Component, Input, OnInit } from '@angular/core';
import { Iperson } from 'src/types/person';
import { CrudHttpService } from '../crud-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-persons',
  templateUrl: './view-all-persons.component.html',
  styleUrls: ['./view-all-persons.component.scss']
})
export class ViewAllPersonsComponent implements OnInit {
  @Input() allPersonData !:Array<Iperson>

  constructor(private _crudservice:CrudHttpService, private _route :ActivatedRoute, private _router: Router) { }
  objId!: number
  ngOnInit(): void {
    this._crudservice.sendObj$
      .subscribe(res => {
        this.allPersonData.push(res)
      })


      this._crudservice.updateObj$
      .subscribe(res => {
        this.allPersonData.forEach(e => {
          if(this.objId === e.id){
            
            e.age = res.age
            e.email = res.email
            e.firstName = res.firstName
            e.lastName = res.lastName
            e.mobile = res.mobile
          }
        })
      })
      
    
  }

  onEdit(id: number){
    this.objId =id
    this._router.navigate(['editperson',id])
  }
//delete fun 
  onDelete(id:number){
    this._crudservice.delete(id)
    .subscribe(
      (res=>{
        alert("data deleteled successfully");
        console.log(res)
        this.allPersonData.forEach((e,i) => {
          if(e.id  === id){
            this.allPersonData.splice(i,1)
          }
        })
      
      }),
       
      (err => {console.log( `Somthing went wrong`)})
  )}

  
}
