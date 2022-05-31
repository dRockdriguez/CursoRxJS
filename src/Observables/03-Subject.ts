import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
    next: (val: number) => console.log(`[ next ]: ${val}`),
    error: error => console.warn(`[ error ]: ${error}`),
    complete: () => console.info(`[ complete ]: Completed!`)
}

const interval$ = new Observable<number>(subs => {
    const interval = setInterval(() => {
        subs.next(Math.random());
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log("Interval Cleared")
    }
});

/*
* Casteo multiple
* Es un observer
* Next, error y complete
*/
const subject$ = new Subject<number>();

const subs = interval$.subscribe(subject$);

// El valor de las dos subscripciones será el mismo
subject$.subscribe(observer);
subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subs.unsubscribe();
}, 3000);