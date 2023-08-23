import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudHttpService } from '../crud-http.service';
import { Iperson } from 'src/types/person';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {
  newpersonid !:number;
  viewSinglePerson !:Iperson
  constructor(private _route:ActivatedRoute, private _curdService:CrudHttpService) { }

  ngOnInit(): void {

     this._route.params.subscribe( res => {
      this.newpersonid = res['id'];
      console.log(this.newpersonid)
    })

    this._curdService.viewsinglePerson(this.newpersonid)
      .subscribe(res =>{
        console.log(res);
        this.viewSinglePerson = res;
      })
  }

  // delete fun
  onDelete(id:number){
    console.log(id);
    
    this._curdService.delete(id)
    .subscribe(
      (res=>{
        alert("data deleteled successfully");
        console.log(res)}),
      (err => {console.log( `Somthing went wrong`)})
  )}

}
