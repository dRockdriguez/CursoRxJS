import { of } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5, 6);


console.log(`[El observable es sincrono, comienza a ejecutarse]`)
obs$.subscribe(next =>
    console.log(`[Next] ${next}`)
);
console.log(`[Termina a ejecutarse]`)


