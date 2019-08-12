export class CounterService {
    inactiveUserCount: number;
    activeUserCount: number;

    onActiveUserAdded() {
        this.activeUserCount = this.activeUserCount + 1;
        console.log('Active Users:' + this.activeUserCount);
    }

    onInactiveUserAdded() {
        this.inactiveUserCount = this.inactiveUserCount + 1;
        console.log('Inactive Users:' + this.inactiveUserCount);
    }
}
