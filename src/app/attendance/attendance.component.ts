import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  employeeName = '';
  markAttendance() {
    alert(`${this.employeeName}'s attendance marked.`);
  }
}
