import { fromEvent, interval } from "rxjs";
import { auditTime } from "rxjs/operators";

const srcClick$ = fromEvent<MouseEvent>(document, 'click');

srcClick$.pipe(auditTime(1000)).subscribe(console.log);