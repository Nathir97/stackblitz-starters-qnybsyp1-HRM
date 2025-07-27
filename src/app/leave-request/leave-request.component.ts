import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent {
  reason = '';

  submitLeave() {
    alert(`Leave requested for: ${this.reason}`);
  }
}
