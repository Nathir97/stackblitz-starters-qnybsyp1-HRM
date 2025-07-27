import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // ✅ this line must match file name & location


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    AttendanceComponent,
    LeaveRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // ✅ Import your routes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
