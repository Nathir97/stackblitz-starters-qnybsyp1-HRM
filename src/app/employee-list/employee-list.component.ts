import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees = [
    { id: 1, name: 'Althaf', role: 'HR Manager' },
    { id: 2, name: 'Nimal', role: 'Software Engineer' }
  ];
}
