import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numbers$ = range(1, 10);

numbers$.pipe(
    tap(n => console.log(`[Tap] ${n}`)),
    map<number, number>(n => n * 10),
    tap({
        next: (n) => console.log(`[Tap observer] ${n}`),
        complete: () => console.log(`[Completed!]`)
    }))
    .subscribe(n => console.log(`[Subscribe] ${n}`));