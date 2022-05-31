import { of, range, asyncScheduler } from "rxjs";

const src$ = of(1, 2, 3, 4, 5);
const srcRange$ = range(1, 100);
const srcRangeAsync$ = range(1, 100, asyncScheduler);

console.log('[Inicio]');
src$.subscribe(console.log);
console.log('[Fin]')

console.log('[Inicio]');
srcRange$.subscribe(console.log);
console.log('[Fin]')

console.log('[Inicio]');
srcRangeAsync$.subscribe(console.log);
console.log('[Fin]')