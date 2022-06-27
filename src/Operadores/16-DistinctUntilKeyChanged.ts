import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
people$.pipe(distinctUntilKeyChanged<Person>('name')).subscribe(console.log);