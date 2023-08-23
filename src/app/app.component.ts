import {Component, OnInit} from '@angular/core';
import { Iperson} from '../types/person';
import { CrudHttpService } from './crud-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public person: Array<Iperson> = [];

  // signlePersonId !:number
  
  constructor(private _crudservice : CrudHttpService,
              private _route:ActivatedRoute){  }

  ngOnInit(): void {


    //get data
    this._crudservice.list()
      .subscribe(
        (res =>{this.person = res}),
        (err => console.log(`Data not found`)))    
      }
      


  }

