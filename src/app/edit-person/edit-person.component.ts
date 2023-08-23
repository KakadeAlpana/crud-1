import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iperson } from 'src/types/person';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  
personDataForm !:FormGroup;
 postId !:number;
  constructor(private _route :ActivatedRoute,
     private _crudservice : CrudHttpService,
     private _router:Router) { }

  ngOnInit(): void {
    this.personDataForm = new FormGroup({
      firstName :new FormControl(null, [Validators.required]),
      lastName :new FormControl(null, [Validators.required]),
      email :new FormControl(null, [Validators.required]),
      mobile :new FormControl(null, [Validators.required]),
      age :new FormControl(null, [Validators.required])
    })

    //edit fun
    this._route.params.subscribe( res => {
      this.postId = res['id'];
      if(this.postId){
        this._crudservice.viewsinglePerson(this.postId)
        .subscribe(
          (res =>{console.log(res);
            this.personDataForm.patchValue(res);
          }),
          (err =>{console.log(err)})
        )
      }
    })
    

  }
 
    //common function For form
    get f(){
      return this.personDataForm.controls
    }
    //New Person Data 
    onCreatePersonData(){
     if(this.personDataForm.valid){
      console.log(this.personDataForm.value)      
       const postpersonData  = {
        id : Math.ceil(Math.random() *10),
        firstName : this.personDataForm.value.firstName,
        lastName :this.personDataForm.value.lastName,
        email :this.personDataForm.value.email,
        mobile :this.personDataForm.value.mobile,
        age :this.personDataForm.value.age
        // ...this.personDataForm.value
      }
      this._crudservice.create(postpersonData)
      .subscribe (res=>{console.log(res);
        //  this._router.navigateByUrl('/')
        this._crudservice.sendObj$.next(this.personDataForm.value)
      },
        (err =>{console.log(err)})
      )
    }
  }
    //update 
    onUpdateData(){
      let postData ={
        ...this.personDataForm.value,
        id:this.postId,
      }
      console.log(postData);
      this._crudservice.update(postData)
      .subscribe(
        (res => {console.log(res);
          this._crudservice.updateObj$.next(this.personDataForm.value)

        this._router.navigateByUrl('/')
        }),
        (err => {console.log(err)})
      )
    }

    onNewPersonData (){
      
    }
  }
