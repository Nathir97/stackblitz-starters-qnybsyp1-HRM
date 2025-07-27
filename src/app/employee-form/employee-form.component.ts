import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employee = { name: '', role: '' };

  save() {
    alert(`Saved: ${this.employee.name} as ${this.employee.role}`);
  }
}
