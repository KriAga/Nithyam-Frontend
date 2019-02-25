import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddSchoolUserComponent} from './add-school-user/add-school-user.component'
import { ClassComponent } from './class/class.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromoteClassComponent } from './promote-class/promote-class.component';
import { PromoteStudentsComponent } from './promote-students/promote-students.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  { path:"",component:AttendanceComponent},
  { path:"addUser",component:AddSchoolUserComponent },
  { path:"class",component:ClassComponent },
  { path:"class/:id",component:StudentsComponent},
  { path:"promote",component:PromoteClassComponent},
  { path:"promote/:id",component:PromoteStudentsComponent},
  { path:"attendance",component:AttendanceComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
