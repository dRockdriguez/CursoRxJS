import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

const interval$ = interval(1000);
const srcClick$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(sample(srcClick$)).subscribe(console.log);