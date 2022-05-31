import { asyncScheduler } from "rxjs";

const greeting = ({ name, surname }) => console.log(`Hello ${name} ${surname}!`);

asyncScheduler.schedule(greeting, 2000, { name: "David", surname: "Rodríguez" });

const interval$ = asyncScheduler.schedule(function (state) {
    console.log(state);
    this.schedule(++state, 1000);
}, 3000, 0);

// setTimeout(() => interval$.unsubscribe(), 10000);
asyncScheduler.schedule(() => interval$.unsubscribe(), 11000);