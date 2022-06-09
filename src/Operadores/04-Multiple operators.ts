import { fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(map<KeyboardEvent, string>(({ code }) => code));

const keyUpEnter$ = keyUp$.pipe(
    filter<string>((code) => code === 'Enter'));

const keyUpA$ = keyUp$.pipe(
    filter<string>((code) => code === 'KeyA'));


keyUpEnter$.subscribe(console.log);
keyUpA$.subscribe(console.log);