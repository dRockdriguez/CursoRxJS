import { fromEvent, interval } from "rxjs";
import { takeUntil, skip } from "rxjs/operators";

const btn = document.querySelector("#btn-timer");


const counter$ = interval(1000);
const clickBtn$ = fromEvent(btn, 'click').pipe(skip(4));

counter$.pipe(takeUntil(clickBtn$)).subscribe({
    next: val => console.log(`[Next] ${JSON.stringify(val)}`),
    complete: () => console.log(`[Complete]`)
});