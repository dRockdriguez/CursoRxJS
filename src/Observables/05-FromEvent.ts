import { fromEvent } from "rxjs";

const srcClick = fromEvent<MouseEvent>(document, 'click');
const srcKeyUp = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log(val)
}

srcClick.subscribe(({x, y}) => console.log(`${x} ${y}`));
srcKeyUp.subscribe(({key}) => console.log(`${key}`));