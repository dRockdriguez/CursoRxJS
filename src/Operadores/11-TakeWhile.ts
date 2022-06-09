import { fromEvent, of } from "rxjs";
import { takeWhile, map, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(() => console.log('[Tap]')),
    map(({ clientX: x, clientY: y }) => ({ x, y })),
    takeWhile(({ x }) => x > 100))
    .subscribe({
        next: val => console.log(`[Next] ${JSON.stringify(val)}`),
        complete: () => console.log(`[Complete]`)
    })