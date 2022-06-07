import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const reducer = (acc, val) => acc + val;
interval(500).pipe(take(6), tap(console.log), reduce(reducer, 1)).subscribe(console.log);