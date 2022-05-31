import { from, range } from "rxjs";
import { filter } from "rxjs/operators";

range(1, 100).pipe(filter<number>((val, i) => val % 2 === 0 && i > 50)).subscribe(console.log);

interface People {
    name: string;
    age: number;
}


const people: People[] = [
    {
        name: "Pepe",
        age: 32
    },
    {
        name: "Pepa",
        age: 12
    },
    {
        name: "Lucas",
        age: 65
    },
    {
        name: "Ambrosia",
        age: 54
    },
];

from<People[]>(people).pipe(filter<People>((p) => p.age < 50)).subscribe(console.log);

