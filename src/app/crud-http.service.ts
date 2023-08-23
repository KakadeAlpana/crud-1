import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iperson } from 'src/types/person';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  baseUrl = `${environment.apiUrl}persons`;
  sendObj$ : Subject<Iperson> = new Subject<Iperson>()
  updateObj$ : Subject<Iperson> = new Subject<Iperson>()
  constructor(private _httpClient: HttpClient) {}

  // Save person details
  create(persondata:Iperson) :Observable<Iperson>{
    return this._httpClient.post<Iperson>(this.baseUrl,persondata)
  }

  // Get all persons data
  list():Observable<Iperson[]> {
   return this._httpClient.get<Iperson[]>(this.baseUrl)
  }
 
  viewsinglePerson(id:number){
    let singlePerson = `${this.baseUrl}/${id}`;
    this.list()
   return  this._httpClient.get<Iperson>(singlePerson);
  }

  // Update person data
  update(data:Iperson): Observable<any> {
    let updateUrl = `${this.baseUrl}/${data.id}`;
     return this._httpClient.patch<any>(updateUrl,data)
  }

  // Delete person
  delete(id:number):Observable<any> {
    let deleteUrs = `${this.baseUrl}/${id}`;
    this.list()
    return this._httpClient.delete<any>(deleteUrs)

  }
}


/*
Following are the API URLs that will be available on our server:

GET /persons – fetch all persons
GET /persons/:id – fetch a single person detail by id
POST /persons – create a new person
PUT /persons/:id – update a person by id
PATCH /persons/:id – partially update a person by id
DELETE /persons/:id – delete a person by id

*/
