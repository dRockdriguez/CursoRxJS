import { from } from "rxjs";

const observer = {
    next: (val) => console.log(`[Next]: ${val}`)
}

const generator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = generator();

const sourceFrom$ = from([1, 2, 3, 4, 5]);
sourceFrom$.subscribe(observer);

const sourceFrom1$ = from("David");
sourceFrom1$.subscribe(observer);

const sourceFrom2$ = from(fetch("https://api.github.com/users/drockdriguez"));
sourceFrom2$.subscribe(async (resp) => {
    const response = await resp.json();
    console.table(response);
});

from(iterable).subscribe(observer);