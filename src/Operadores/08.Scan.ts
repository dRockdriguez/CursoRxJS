import { range, from } from "rxjs";
import { scan, reduce, pluck } from "rxjs/operators";

const reducer = (acc, val) => acc + val;

range(1, 5).pipe(reduce(reducer, 0)).subscribe(console.log);

range(1, 5).pipe(scan(reducer, 0)).subscribe(console.log);


// Ejemplo
interface User {
    id: string;
    auth: boolean;
    token: string;
    name: string;
}

const user: User[] = [
    {
        id: '1',
        auth: false,
        token: '',
        name: ''
    },
    {
        id: '1',
        auth: true,
        token: '123',
        name: 'David'
    },
    {
        id: '1',
        auth: true,
        token: '321',
        name: 'David'
    }
];

const state$ = from(user).pipe(scan((acc, current) => {
    return { ...acc, ...current }
}, { age: 32 }));

const id$ = state$.pipe(pluck('id'))
id$.subscribe(console.log)