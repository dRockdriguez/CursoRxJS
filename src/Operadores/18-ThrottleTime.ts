import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime, pluck, distinctUntilChanged } from "rxjs/operators";

const srcClick = fromEvent<MouseEvent>(document, 'click');
srcClick.pipe(throttleTime(10000)).subscribe(({ x, y }) => console.log(`${x} ${y}`));


const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(throttleTime(1000, asyncScheduler, {
    leading: true,
    trailing: true
}), pluck('target', 'value'), distinctUntilChanged()).subscribe(console.log);