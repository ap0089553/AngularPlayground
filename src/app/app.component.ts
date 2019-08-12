import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent implements OnInit {
  activeUserCount: number;
  inactiveUserCount: number;

  constructor(private counterService: CounterService) {

  }

  ngOnInit() {
    this.activeUserCount = this.counterService.activeUserCount;
    this.inactiveUserCount = this.counterService.inactiveUserCount;
  }
}
