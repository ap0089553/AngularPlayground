import { CounterService } from './counter.service';

export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {
        this.counterService.activeUserCount = this.activeUsers.length;
        this.counterService.inactiveUserCount = this.inactiveUsers.length;
    }

    onSetToInactive(index: number) {
        this.inactiveUsers.push(this.activeUsers[index]);
        this.activeUsers.splice(index, 1);
        this.counterService.onInactiveUserAdded();
    }

    onSetToActive(index: number) {
        this.activeUsers.push(this.inactiveUsers[index]);
        this.inactiveUsers.splice(index, 1);
        this.counterService.onActiveUserAdded();
    }
}
