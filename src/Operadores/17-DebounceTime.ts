import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from "rxjs/operators";

const srcClick = fromEvent<MouseEvent>(document, 'click');
srcClick.pipe(debounceTime(1000)).subscribe(({ x, y }) => console.log(`${x} ${y}`));


const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$.pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged()).subscribe(console.log);