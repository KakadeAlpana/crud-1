import { NgModule, createComponent } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ViewAllPersonsComponent } from './view-all-persons/view-all-persons.component';
// import { CreatePersonDataComponent } from './create-person-data/create-person-data.component';


const routes: Routes = [
  // {path:'',component:DashboardComponent},

  // {path:'viewallperson',component:ViewAllPersonsComponent},
  {path:'viewperson/:id',component:ViewPersonComponent},
  {path:'viewperson',component:ViewPersonComponent},

  {path:'editperson',component:EditPersonComponent},
  {path:'editperson/:id',component:EditPersonComponent},
 
  // {path:'viewperson/:id/edit',component:CreatePersonDataComponent},
  // {path:'createpersondata',component:CreatePersonDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
