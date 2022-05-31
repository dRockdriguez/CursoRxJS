import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: val => {
        console.log(val);
    },
    error: error => {
        console.error(error);
    },
    complete: () => {
        console.log("Completed!");
    }
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next("Hello");
    subscriber.next("World");
    subscriber.next("!!");

    throw new Error("Error from observable!")
    subscriber.complete();
});

/*
obs$.subscribe(
    val => console.log(val),
    error => console.error(error),
    () => console.log("Completed!")
);
*/

obs$.subscribe(observer);

