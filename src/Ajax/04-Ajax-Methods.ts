import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.post(url, {
    id: 1,
    name: 'Name'
}, {
    'Header-Prueba': 'miau'
}).subscribe(console.log);

ajax.put(url, {
    id: 1,
    name: 'Name'
}, {
    'Header-Prueba': 'miau'
}).subscribe(console.log);

ajax({
    url,
    method: 'POST',
    headers: {
        'Header-Prueba': 'miau'
    },
    body: {
        name: 'Name'
    }
}).subscribe(console.log);