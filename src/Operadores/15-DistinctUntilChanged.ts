import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 1, 3, 4, 5, 2, 1, 3, 4, 5, 0);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Person {
    name: string;
}

const people: Person[] = [
    {
        name: "Name1"
    },
    {
        name: "Name2"
    },
    {
        name: "Name1"
    },
    {
        name: "Name2"
    },
    {
        name: "Name3"
    },
    {
        name: "Name4"
    },
    {
        name: "Name4"
    },
    {
        name: "Name5"
    },

];

const people$ = from<Person[]>(people);
people$.pipe(distinctUntilChanged<Person>((prev, curr) => prev.name === curr.name)).subscribe(console.log);