import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
    next: (val: number) => console.log(`[ next ]: ${val}`),
    error: error => console.warn(`[ error ]: ${error}`),
    complete: () => console.info(`[ complete ]: Completed!`)
}

const interval$ = new Observable<number>(subscriber => {
    let cont = 0;

    const interval = setInterval(() => {
        subscriber.next(cont++);
        console.log(`Value in the interval ${cont}`)
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        // Se ejecuta cuando se llama el complete
        clearInterval(interval);
        console.log(`Interval cleared!`);
    }
});

const sub1 = interval$.subscribe(observer);
const sub2 = interval$.subscribe(observer);
const sub3 = interval$.subscribe(observer);

sub1.add(sub2)
sub1.add(sub3);

setTimeout(() => {
    sub1.unsubscribe();
}, 6000);