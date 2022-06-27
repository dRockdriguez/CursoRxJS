import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1sadf';

const handleError = (err: AjaxError) => {
    console.warn(err);

    return of({});
};

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'token': ' 1234'
});
const obs2$ = ajax(url);

obs$.pipe(catchError(handleError)).subscribe(console.log);
obs2$.pipe(catchError(handleError)).subscribe(console.log);

const obs3$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'token': ' 1234'
});
const obs4$ = ajax(url);

obs3$.pipe(catchError(handleError)).subscribe({
    next: (val) => console.log(`{NEXT} ${val}`),
    error: (err) => console.warn(`{ERROR} (no se llama si hay catchError) ${err}`),
    complete: () => console.log(`{COMPLETE}`)

})
