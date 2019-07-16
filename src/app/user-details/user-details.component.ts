import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  showPassword = false;
  count = 0;
  scores = [];
  background = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.showPassword = !this.showPassword;
    this.count += 1;
    this.scores.push(this.count);
    this.background = this.count > 5 ? 'blue' : 'white';
  }
}
