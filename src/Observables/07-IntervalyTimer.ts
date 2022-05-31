import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log(`[Next] ${val}`) 
}

/*
const interval$ = interval(1000);
const timer$ = timer(3000, 1000);

interval$.subscribe(observer);
timer$.subscribe(observer);*/


const after5Seconds = new Date();
after5Seconds.setSeconds(after5Seconds.getSeconds() + 5);
const timer$ = timer(after5Seconds);

timer$.subscribe(observer);