import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddSchoolUserComponent} from './add-school-user/add-school-user.component'
import { ClassComponent } from './class/class.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path:"school/user",component:AddSchoolUserComponent },
  { path:"school/class",component:ClassComponent },
  { path:"school/class/:id",component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
