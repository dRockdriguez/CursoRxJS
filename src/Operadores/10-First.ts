import { fromEvent, of } from "rxjs";
import { first, map, tap } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);

/*
numbers$.pipe(
    first())
    .subscribe({
        next: val => console.log(`[Next] ${val}`),
        complete: () => console.log(`[Complete]`)
    });
*/

numbers$.pipe(
    first(val => val > 3))
    .subscribe({
        next: val => console.log(`[Next] ${val}`),
        complete: () => console.log(`[Complete]`)
    });

const click$ = fromEvent<MouseEvent>(document, 'click');
/*click$.pipe(take(1)).subscribe({
    next: val => console.log(`[Next] ${val}`),
    complete: () => console.log(`[Complete]`)
});*/

/*
click$.pipe(first()).subscribe({
    next: val => console.log(`[Next] ${val}`),
    complete: () => console.log(`[Complete]`)
})*/

click$.pipe(
    tap(() => console.log('[Tap]')),
    map(({ clientX: x, clientY: y }) => ({ x, y })),
    first(({ x }) => x > 100))
    .subscribe({
        next: val => console.log(`[Next] ${JSON.stringify(val)}`),
        complete: () => console.log(`[Complete]`)
    })