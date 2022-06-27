import { Observable, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';

const url = 'https://api.giathub.com/users?per_page=5';

const errorHandler = (err: AjaxError): Observable<any> => {
    console.warn(err);
    return of([]);
};
ajax(url).pipe(pluck('response'), catchError(errorHandler)).subscribe(console.log);
